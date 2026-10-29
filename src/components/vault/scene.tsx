import { Canvas, useFrame } from "@react-three/fiber";
import { Component, useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from "react";
import * as THREE from "three";

type Spine = {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
};

const SPINES = ["#e8dccf", "#c23b4e", "#d4b36a", "#f4efe8", "#8d2436", "#efe4da", "#a32038", "#f0c36a", "#6e1a2c", "#fff6ee"];

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildShelf(x: number, seed: number): Spine[] {
  const rand = mulberry32(seed);
  const items: Spine[] = [];
  for (let row = 0; row < 6; row += 1) {
    let z = -5.1;
    const y = 0.42 + row * 0.5;
    while (z < 2.6) {
      const thick = 0.065 + rand() * 0.07;
      const height = 0.3 + rand() * 0.12;
      items.push({
        position: [x, y + height / 2, z],
        scale: [0.28, height, thick],
        color: SPINES[Math.floor(rand() * SPINES.length)] ?? SPINES[0],
      });
      z += thick + 0.01;
    }
  }
  return items;
}

const LEFT_BOOKS = buildShelf(-1.48, 11);
const RIGHT_BOOKS = buildShelf(1.48, 29);

function BookWall({ items }: { items: Spine[] }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  useEffect(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    items.forEach((item, index) => {
      dummy.position.set(item.position[0], item.position[1], item.position[2]);
      dummy.scale.set(item.scale[0], item.scale[1], item.scale[2]);
      dummy.updateMatrix();
      mesh.setMatrixAt(index, dummy.matrix);
      mesh.setColorAt(index, color.set(item.color));
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [items]);

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, items.length]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={0.62} metalness={0.08} />
    </instancedMesh>
  );
}

function ShelfCarcass({ x, outward }: { x: number; outward: number }) {
  return (
    <group>
      <mesh position={[x + outward * 0.22, 1.85, -1.2]}>
        <boxGeometry args={[0.06, 3.55, 8.1]} />
        <meshStandardMaterial color="#1c1012" roughness={0.78} metalness={0.1} />
      </mesh>
      {Array.from({ length: 7 }, (_, row) => (
        <mesh key={row} position={[x, 0.32 + row * 0.5, -1.2]}>
          <boxGeometry args={[0.34, 0.035, 8.1]} />
          <meshStandardMaterial color="#3a221c" roughness={0.5} metalness={0.16} />
        </mesh>
      ))}
    </group>
  );
}

function Choreography({
  open,
  reduce,
  left,
  right,
}: {
  open: boolean;
  reduce: boolean;
  left: RefObject<THREE.Group | null>;
  right: RefObject<THREE.Group | null>;
}) {
  const progress = useRef(reduce ? 1 : 0);
  const sway = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const step = Math.min(delta, 0.05);
    const target = open ? 1 : 0;
    progress.current = reduce ? target : THREE.MathUtils.damp(progress.current, target, 1.15, step);
    const glide = progress.current * progress.current * (3 - 2 * progress.current);
    sway.current.x = THREE.MathUtils.damp(sway.current.x, reduce ? 0 : state.pointer.x, 2.2, step);
    sway.current.y = THREE.MathUtils.damp(sway.current.y, reduce ? 0 : state.pointer.y, 2.2, step);
    const angle = glide * 1.25;
    if (left.current) left.current.rotation.y = angle;
    if (right.current) right.current.rotation.y = -angle;
    state.camera.position.set(
      sway.current.x * 0.28,
      1.48 + sway.current.y * 0.06,
      THREE.MathUtils.lerp(8.4, 5.35, glide),
    );
    state.camera.lookAt(sway.current.x * 0.08, 1.55, -1.6);
  });

  return null;
}

function Floaters({ reduce }: { reduce: boolean }) {
  const group = useRef<THREE.Group>(null);
  const volumes = useMemo(
    () => [
      { position: [-0.45, 1.35, -0.4] as [number, number, number], color: "#8d2436", size: [0.22, 0.34, 0.05] as [number, number, number] },
      { position: [0.2, 1.7, 0.15] as [number, number, number], color: "#c4a15a", size: [0.18, 0.28, 0.045] as [number, number, number] },
      { position: [0.5, 1.25, -0.85] as [number, number, number], color: "#f3ebe4", size: [0.2, 0.3, 0.05] as [number, number, number] },
      { position: [-0.1, 1.95, -1.3] as [number, number, number], color: "#3a0d14", size: [0.16, 0.26, 0.04] as [number, number, number] },
    ],
    [],
  );

  useFrame((state) => {
    const root = group.current;
    if (!root || reduce) return;
    const t = state.clock.elapsedTime;
    root.children.forEach((child, index) => {
      const base = child.userData.baseY as number;
      child.position.y = base + Math.sin(t * 0.8 + index) * 0.07;
      child.rotation.y = t * 0.35 + index * 0.6;
      child.rotation.z = Math.sin(t * 0.4 + index) * 0.08;
    });
  });

  return (
    <group ref={group}>
      {volumes.map((book) => (
        <mesh key={book.color} position={book.position} userData={{ baseY: book.position[1] }}>
          <boxGeometry args={book.size} />
          <meshStandardMaterial color={book.color} roughness={0.4} metalness={0.22} emissive={book.color} emissiveIntensity={0.15} />
        </mesh>
      ))}
    </group>
  );
}

function DoorLeaf({ side }: { side: "left" | "right" }) {
  const sign = side === "left" ? 1 : -1;
  return (
    <group>
      <mesh position={[sign * 0.48, 1.45, 0]}>
        <boxGeometry args={[0.96, 2.85, 0.07]} />
        <meshStandardMaterial color="#1a0c10" metalness={0.45} roughness={0.4} />
      </mesh>
      <mesh position={[sign * 0.48, 2.2, 0.04]}>
        <boxGeometry args={[0.7, 0.012, 0.01]} />
        <meshStandardMaterial color="#c4a15a" metalness={0.85} roughness={0.2} />
      </mesh>
      <mesh position={[sign * 0.48, 0.75, 0.04]}>
        <boxGeometry args={[0.7, 0.012, 0.01]} />
        <meshStandardMaterial color="#c4a15a" metalness={0.85} roughness={0.2} />
      </mesh>
      <mesh position={[sign * 0.78, 1.4, 0.05]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshStandardMaterial color="#e6c98a" metalness={0.9} roughness={0.15} emissive="#8a6420" emissiveIntensity={0.45} />
      </mesh>
    </group>
  );
}

function HallMesh({
  open,
  reduce,
}: {
  open: boolean;
  reduce: boolean;
}) {
  const left = useRef<THREE.Group>(null);
  const right = useRef<THREE.Group>(null);

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -1]}>
        <planeGeometry args={[14, 18]} />
        <meshStandardMaterial color="#1a0c10" roughness={0.55} metalness={0.18} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, -0.8]}>
        <planeGeometry args={[1.35, 8]} />
        <meshStandardMaterial color="#6e1a2a" roughness={0.88} />
      </mesh>
      <mesh position={[0, 2.05, -5.7]}>
        <boxGeometry args={[6.2, 4.3, 0.16]} />
        <meshStandardMaterial color="#12080b" roughness={0.9} />
      </mesh>
      <mesh position={[0, 3.05, -5.58]}>
        <circleGeometry args={[0.85, 40]} />
        <meshBasicMaterial color="#ff4d66" />
      </mesh>
      <mesh position={[0, 2.15, -5.58]}>
        <planeGeometry args={[1.15, 1.9]} />
        <meshBasicMaterial color="#c4233a" />
      </mesh>
      <mesh position={[0, 4.05, -1]}>
        <boxGeometry args={[6.4, 0.1, 12]} />
        <meshStandardMaterial color="#090607" />
      </mesh>
      <ShelfCarcass x={-1.48} outward={-1} />
      <ShelfCarcass x={1.48} outward={1} />
      <BookWall items={LEFT_BOOKS} />
      <BookWall items={RIGHT_BOOKS} />
      <mesh position={[0, 0.72, 0.2]}>
        <boxGeometry args={[1.5, 0.07, 0.7]} />
        <meshStandardMaterial color="#3a2018" metalness={0.2} roughness={0.45} />
      </mesh>
      <mesh position={[0, 0.36, 0.2]}>
        <boxGeometry args={[1.2, 0.66, 0.08]} />
        <meshStandardMaterial color="#241014" />
      </mesh>
      <group position={[0, 3.35, -0.6]}>
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.55, 8]} />
          <meshStandardMaterial color="#c4a15a" metalness={0.8} roughness={0.25} />
        </mesh>
        <mesh position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.42, 0.015, 8, 24]} />
          <meshStandardMaterial color="#e6c98a" metalness={0.8} roughness={0.22} />
        </mesh>
        {Array.from({ length: 5 }, (_, index) => {
          const angle = (index / 5) * Math.PI * 2;
          return (
            <mesh key={index} position={[Math.cos(angle) * 0.42, -0.68, Math.sin(angle) * 0.42]}>
              <sphereGeometry args={[0.045, 12, 12]} />
              <meshStandardMaterial color="#ffe6cc" emissive="#ffb070" emissiveIntensity={2} />
            </mesh>
          );
        })}
      </group>
      <pointLight position={[0, 2.55, -0.6]} color="#ffc79a" intensity={26} distance={12} decay={2} />
      <pointLight position={[0, 2.4, -4.6]} color="#ff3358" intensity={24} distance={14} decay={2} />
      <group ref={left} position={[-0.9, 0, 4.7]}>
        <DoorLeaf side="left" />
      </group>
      <group ref={right} position={[0.9, 0, 4.7]}>
        <DoorLeaf side="right" />
      </group>
      <Choreography open={open} reduce={reduce} left={left} right={right} />
      <Floaters reduce={reduce} />
    </>
  );
}

function SceneContents({ open, reduce }: { open: boolean; reduce: boolean }) {
  return (
    <>
      <color attach="background" args={["#090607"]} />
      <fog attach="fog" args={["#12080c", 11, 22]} />
      <ambientLight intensity={0.9} color="#6a4048" />
      <hemisphereLight args={["#c08088", "#2a1216", 1.2]} />
      <HallMesh open={open} reduce={reduce} />
    </>
  );
}

function CssMansion({ open }: { open: boolean }) {
  return (
    <div className="css-hall absolute inset-0" aria-hidden="true">
      <div className="absolute top-[14%] left-1/2 h-44 w-28 -translate-x-1/2 rounded-t-full bg-primary-bright blur-2xl" />
      <div className="absolute bottom-[16%] left-1/2 flex h-[62%] w-[min(78vw,26rem)] -translate-x-1/2">
        <div className={`css-door h-full w-1/2 ${open ? "is-open" : ""}`} />
        <div className={`css-door css-door-right h-full w-1/2 ${open ? "is-open" : ""}`} />
      </div>
    </div>
  );
}

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

export function LibraryBackdrop({ open, reduce }: { open: boolean; reduce: boolean }) {
  const [live, setLive] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (gl) setLive(true);
    } catch {
      setLive(false);
    }
  }, []);

  return (
    <div className="absolute inset-0 bg-bg">
      <CssMansion open={open || reduce} />
      {live ? (
        <SceneBoundary>
          <Canvas
            className="absolute inset-0"
            dpr={[1, 1.5]}
            camera={{ position: [0, 1.48, 8.4], fov: 52, near: 0.1, far: 40 }}
            gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
            frameloop={reduce ? "demand" : "always"}
            onCreated={({ gl }) => {
              gl.toneMappingExposure = 1.25;
            }}
          >
            <SceneContents open={open} reduce={reduce} />
          </Canvas>
        </SceneBoundary>
      ) : null}
      <div className="vignette pointer-events-none absolute inset-0" />
    </div>
  );
}
