import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Object3D, i as MathUtils, n as useFrame, r as Color, t as Canvas } from "../_libs/@react-three/fiber+[...].mjs";
import { _ as BookOpen, a as Plus, c as Menu, d as KeyRound, f as Feather, g as Bookmark, h as Check, i as Search, l as Mail, m as Compass, o as Moon, p as DoorOpen, r as ShoppingBag, s as Minus, t as X, u as Library, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CT28hgKm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var wings = [
	"All",
	"Gothic",
	"Letters",
	"Observatory",
	"Atlas",
	"Night"
];
var books = [
	{
		id: "red-stair",
		title: "The Red Stair",
		author: "I. Voss",
		wing: "Gothic",
		year: "1894",
		pages: 312,
		price: 28,
		edition: "Night cloth",
		blurb: "A house with one stair that only appears after the lamps are low, and the reader who keeps climbing it.",
		excerpt: "The stair was not there at noon. By the second candle it had remembered itself, each tread the color of a sealed letter.",
		cover: "crimson"
	},
	{
		id: "letters-never",
		title: "Letters Never Sent",
		author: "M. Calder",
		wing: "Letters",
		year: "1911",
		pages: 224,
		price: 22,
		edition: "Ribbon copy",
		blurb: "Correspondence from a binder who addressed every book as if it might answer.",
		excerpt: "Dear margin — I have left you wider tonight. If you must speak, speak where the thumb rests.",
		cover: "wine"
	},
	{
		id: "grammar-night",
		title: "A Grammar of Night",
		author: "H. Ell",
		wing: "Observatory",
		year: "1888",
		pages: 406,
		price: 34,
		edition: "Observatory set",
		blurb: "Rules for naming darkness, written when the dome still opened over the east lawn.",
		excerpt: "Do not call it black. Black is a decision. What you are looking at has not decided yet.",
		cover: "ink"
	},
	{
		id: "coast",
		title: "Coast Without Maps",
		author: "S. Pell",
		wing: "Atlas",
		year: "1902",
		pages: 268,
		price: 26,
		edition: "Salt linen",
		blurb: "A voyage catalog of shores that refuse to stay where the chart last left them.",
		excerpt: "We folded the map until the sea was the size of a palm, and still it kept arriving.",
		cover: "ash"
	},
	{
		id: "wax",
		title: "Wax and Wick",
		author: "L. Moreau",
		wing: "Night",
		year: "1920",
		pages: 176,
		price: 18,
		edition: "Candle quarto",
		blurb: "Poems timed to the life of a single flame in the reading gallery.",
		excerpt: "Hold still. The wick is doing the only honest work in the room.",
		cover: "brass"
	},
	{
		id: "house-reads",
		title: "The House That Reads",
		author: "I. Voss",
		wing: "Gothic",
		year: "1899",
		pages: 354,
		price: 32,
		edition: "Estate binding",
		blurb: "How a library became a residence, and why the doors insist on opening inward.",
		excerpt: "Guests ask where the owner sleeps. The house, offended, offers them a chair.",
		cover: "blood"
	},
	{
		id: "margin-storm",
		title: "Margin Notes for a Storm",
		author: "A. Quinn",
		wing: "Letters",
		year: "1916",
		pages: 198,
		price: 20,
		edition: "Storm proof",
		blurb: "Notes passed between two readers during a week the windows would not shut.",
		excerpt: "If the rain reaches page forty, stop. That chapter was not built for weather.",
		cover: "wine"
	},
	{
		id: "iron-orchard",
		title: "Iron Orchard",
		author: "S. Pell",
		wing: "Atlas",
		year: "1877",
		pages: 290,
		price: 30,
		edition: "Field atlas",
		blurb: "An inland journey through walled gardens that grow hinges instead of fruit.",
		excerpt: "Every tree had a latch. We did not pick. We opened.",
		cover: "brass"
	},
	{
		id: "theorem",
		title: "Theorem of Quiet",
		author: "H. Ell",
		wing: "Observatory",
		year: "1908",
		pages: 240,
		price: 27,
		edition: "Proof copy",
		blurb: "A short philosophy of attention, argued entirely after midnight.",
		excerpt: "Quiet is not the absence of sound. It is the decision not to chase the next one.",
		cover: "ink"
	},
	{
		id: "velvet",
		title: "Velvet Index",
		author: "L. Moreau",
		wing: "Night",
		year: "1926",
		pages: 164,
		price: 24,
		edition: "Gallery slip",
		blurb: "An index of fabrics, shadows, and the people who mistook one for the other.",
		excerpt: "Entry 14: a sleeve so dark the arm inside it had to be taken on trust.",
		cover: "crimson"
	},
	{
		id: "door-unlocked",
		title: "Door, Unlocked",
		author: "M. Calder",
		wing: "Gothic",
		year: "1881",
		pages: 288,
		price: 29,
		edition: "Key edition",
		blurb: "Thirteen keys and the rooms they were never meant to admit.",
		excerpt: "The lock turned before the key did. Someone on the other side had been practicing.",
		cover: "blood"
	},
	{
		id: "last-lamp",
		title: "The Last Lamp",
		author: "I. Voss",
		wing: "Night",
		year: "1931",
		pages: 210,
		price: 23,
		edition: "Closing bell",
		blurb: "A closing-hour novel. The vault keeps one lamp for the reader who will not leave.",
		excerpt: "They dimmed the hall and forgot me, which is the polite way a library says stay.",
		cover: "ash"
	}
];
var plans = [
	{
		id: "visitor",
		name: "Visitor",
		price: 0,
		cadence: "the door",
		note: "Walk the hall. The stacks stay in view.",
		points: [
			"Browse every wing",
			"Read opening pages",
			"No account required"
		]
	},
	{
		id: "resident",
		name: "Resident",
		price: 12,
		cadence: "month",
		note: "A key to the night reading room.",
		featured: true,
		points: [
			"Two editions each month",
			"A private shelf",
			"Night room, no feed"
		]
	},
	{
		id: "curator",
		name: "Curator",
		price: 28,
		cadence: "month",
		note: "For readers who arrange the house, not only visit it.",
		points: [
			"Six editions each month",
			"Early wing openings",
			"Notes from the binder"
		]
	},
	{
		id: "estate",
		name: "Estate",
		price: 76,
		cadence: "month",
		note: "The full house, including the bindery's quiet list.",
		points: [
			"Every new edition",
			"A named alcove",
			"Invoice on the house ledger"
		]
	}
];
function money(amount) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(amount);
}
function findBook(id) {
	return books.find((book) => book.id === id);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var memory = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {}
};
var useVault = create()(persist((set, get) => ({
	cart: [],
	shelf: [],
	orders: [],
	reservedPlan: null,
	add: (id) => {
		const cart = get().cart;
		set({ cart: cart.find((item) => item.id === id) ? cart.map((item) => item.id === id ? {
			...item,
			qty: item.qty + 1
		} : item) : [...cart, {
			id,
			qty: 1
		}] });
	},
	setQty: (id, qty) => {
		if (qty < 1) {
			set({ cart: get().cart.filter((item) => item.id !== id) });
			return;
		}
		set({ cart: get().cart.map((item) => item.id === id ? {
			...item,
			qty
		} : item) });
	},
	remove: (id) => set({ cart: get().cart.filter((item) => item.id !== id) }),
	clearCart: () => set({ cart: [] }),
	toggleShelf: (id) => {
		const shelf = get().shelf;
		set({ shelf: shelf.includes(id) ? shelf.filter((item) => item !== id) : [...shelf, id] });
	},
	placeOrder: (order) => set({
		orders: [order, ...get().orders],
		cart: []
	}),
	reserve: (planId) => set({ reservedPlan: planId })
}), {
	name: "ebook-vault",
	skipHydration: true,
	storage: createJSONStorage(() => typeof window === "undefined" ? memory : window.localStorage)
}));
var SPINES = [
	"#e8dccf",
	"#c23b4e",
	"#d4b36a",
	"#f4efe8",
	"#8d2436",
	"#efe4da",
	"#a32038",
	"#f0c36a",
	"#6e1a2c",
	"#fff6ee"
];
function mulberry32(seed) {
	let a = seed;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function buildShelf(x, seed) {
	const rand = mulberry32(seed);
	const items = [];
	for (let row = 0; row < 6; row += 1) {
		let z = -5.1;
		const y = .42 + row * .5;
		while (z < 2.6) {
			const thick = .065 + rand() * .07;
			const height = .3 + rand() * .12;
			items.push({
				position: [
					x,
					y + height / 2,
					z
				],
				scale: [
					.28,
					height,
					thick
				],
				color: SPINES[Math.floor(rand() * SPINES.length)] ?? SPINES[0]
			});
			z += thick + .01;
		}
	}
	return items;
}
var LEFT_BOOKS = buildShelf(-1.48, 11);
var RIGHT_BOOKS = buildShelf(1.48, 29);
function BookWall({ items }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const mesh = ref.current;
		if (!mesh) return;
		const dummy = new Object3D();
		const color = new Color();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("instancedMesh", {
		ref,
		args: [
			void 0,
			void 0,
			items.length
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			1,
			1,
			1
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			roughness: .62,
			metalness: .08
		})]
	});
}
function ShelfCarcass({ x, outward }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			x + outward * .22,
			1.85,
			-1.2
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.06,
			3.55,
			8.1
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#1c1012",
			roughness: .78,
			metalness: .1
		})]
	}), Array.from({ length: 7 }, (_, row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			x,
			.32 + row * .5,
			-1.2
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			.34,
			.035,
			8.1
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#3a221c",
			roughness: .5,
			metalness: .16
		})]
	}, row))] });
}
function Choreography({ open, reduce, left, right }) {
	const progress = (0, import_react.useRef)(reduce ? 1 : 0);
	const sway = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	useFrame((state, delta) => {
		const step = Math.min(delta, .05);
		const target = open ? 1 : 0;
		progress.current = reduce ? target : MathUtils.damp(progress.current, target, 1.15, step);
		const glide = progress.current * progress.current * (3 - 2 * progress.current);
		sway.current.x = MathUtils.damp(sway.current.x, reduce ? 0 : state.pointer.x, 2.2, step);
		sway.current.y = MathUtils.damp(sway.current.y, reduce ? 0 : state.pointer.y, 2.2, step);
		const angle = glide * 1.25;
		if (left.current) left.current.rotation.y = angle;
		if (right.current) right.current.rotation.y = -angle;
		state.camera.position.set(sway.current.x * .28, 1.48 + sway.current.y * .06, MathUtils.lerp(8.4, 5.35, glide));
		state.camera.lookAt(sway.current.x * .08, 1.55, -1.6);
	});
	return null;
}
function Floaters({ reduce }) {
	const group = (0, import_react.useRef)(null);
	const volumes = (0, import_react.useMemo)(() => [
		{
			position: [
				-.45,
				1.35,
				-.4
			],
			color: "#8d2436",
			size: [
				.22,
				.34,
				.05
			]
		},
		{
			position: [
				.2,
				1.7,
				.15
			],
			color: "#c4a15a",
			size: [
				.18,
				.28,
				.045
			]
		},
		{
			position: [
				.5,
				1.25,
				-.85
			],
			color: "#f3ebe4",
			size: [
				.2,
				.3,
				.05
			]
		},
		{
			position: [
				-.1,
				1.95,
				-1.3
			],
			color: "#3a0d14",
			size: [
				.16,
				.26,
				.04
			]
		}
	], []);
	useFrame((state) => {
		const root = group.current;
		if (!root || reduce) return;
		const t = state.clock.elapsedTime;
		root.children.forEach((child, index) => {
			const base = child.userData.baseY;
			child.position.y = base + Math.sin(t * .8 + index) * .07;
			child.rotation.y = t * .35 + index * .6;
			child.rotation.z = Math.sin(t * .4 + index) * .08;
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: group,
		children: volumes.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: book.position,
			userData: { baseY: book.position[1] },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: book.size }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: book.color,
				roughness: .4,
				metalness: .22,
				emissive: book.color,
				emissiveIntensity: .15
			})]
		}, book.color))
	});
}
function DoorLeaf({ side }) {
	const sign = side === "left" ? 1 : -1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				sign * .48,
				1.45,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.96,
				2.85,
				.07
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#1a0c10",
				metalness: .45,
				roughness: .4
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				sign * .48,
				2.2,
				.04
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.7,
				.012,
				.01
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c4a15a",
				metalness: .85,
				roughness: .2
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				sign * .48,
				.75,
				.04
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.7,
				.012,
				.01
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c4a15a",
				metalness: .85,
				roughness: .2
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				sign * .78,
				1.4,
				.05
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.035,
				16,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e6c98a",
				metalness: .9,
				roughness: .15,
				emissive: "#8a6420",
				emissiveIntensity: .45
			})]
		})
	] });
}
function HallMesh({ open, reduce }) {
	const left = (0, import_react.useRef)(null);
	const right = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				0,
				-1
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [14, 18] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#1a0c10",
				roughness: .55,
				metalness: .18
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.02,
				-.8
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.35, 8] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#6e1a2a",
				roughness: .88
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.05,
				-5.7
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				6.2,
				4.3,
				.16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#12080b",
				roughness: .9
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				3.05,
				-5.58
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [.85, 40] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#ff4d66" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.15,
				-5.58
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.15, 1.9] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#c4233a" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				4.05,
				-1
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				6.4,
				.1,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: "#090607" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShelfCarcass, {
			x: -1.48,
			outward: -1
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShelfCarcass, {
			x: 1.48,
			outward: 1
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookWall, { items: LEFT_BOOKS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookWall, { items: RIGHT_BOOKS }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.72,
				.2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.5,
				.07,
				.7
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#3a2018",
				metalness: .2,
				roughness: .45
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.36,
				.2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.2,
				.66,
				.08
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: "#241014" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				3.35,
				-.6
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.2,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.012,
						.012,
						.55,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c4a15a",
						metalness: .8,
						roughness: .25
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.5,
						0
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
						.42,
						.015,
						8,
						24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#e6c98a",
						metalness: .8,
						roughness: .22
					})]
				}),
				Array.from({ length: 5 }, (_, index) => {
					const angle = index / 5 * Math.PI * 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							Math.cos(angle) * .42,
							-.68,
							Math.sin(angle) * .42
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.045,
							12,
							12
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#ffe6cc",
							emissive: "#ffb070",
							emissiveIntensity: 2
						})]
					}, index);
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				2.55,
				-.6
			],
			color: "#ffc79a",
			intensity: 26,
			distance: 12,
			decay: 2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				2.4,
				-4.6
			],
			color: "#ff3358",
			intensity: 24,
			distance: 14,
			decay: 2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			ref: left,
			position: [
				-.9,
				0,
				4.7
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorLeaf, { side: "left" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			ref: right,
			position: [
				.9,
				0,
				4.7
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorLeaf, { side: "right" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choreography, {
			open,
			reduce,
			left,
			right
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Floaters, { reduce })
	] });
}
function SceneContents({ open, reduce }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#090607"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
			attach: "fog",
			args: [
				"#12080c",
				11,
				22
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .9,
			color: "#6a4048"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#c08088",
			"#2a1216",
			1.2
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HallMesh, {
			open,
			reduce
		})
	] });
}
function CssMansion({ open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "css-hall absolute inset-0",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[14%] left-1/2 h-44 w-28 -translate-x-1/2 rounded-t-full bg-primary-bright blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute bottom-[16%] left-1/2 flex h-[62%] w-[min(78vw,26rem)] -translate-x-1/2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `css-door h-full w-1/2 ${open ? "is-open" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `css-door css-door-right h-full w-1/2 ${open ? "is-open" : ""}` })]
		})]
	});
}
var SceneBoundary = class extends import_react.Component {
	state = { failed: false };
	static getDerivedStateFromError() {
		return { failed: true };
	}
	render() {
		if (this.state.failed) return null;
		return this.props.children;
	}
};
function LibraryBackdrop({ open, reduce }) {
	const [live, setLive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const canvas = document.createElement("canvas");
			if (canvas.getContext("webgl2") || canvas.getContext("webgl")) setLive(true);
		} catch {
			setLive(false);
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CssMansion, { open: open || reduce }),
			live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
				className: "absolute inset-0",
				dpr: [1, 1.5],
				camera: {
					position: [
						0,
						1.48,
						8.4
					],
					fov: 52,
					near: .1,
					far: 40
				},
				gl: {
					antialias: true,
					alpha: false,
					powerPreference: "high-performance"
				},
				frameloop: reduce ? "demand" : "always",
				onCreated: ({ gl }) => {
					gl.toneMappingExposure = 1.25;
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneContents, {
					open,
					reduce
				})
			}) }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette pointer-events-none absolute inset-0" })
		]
	});
}
var coverClass = {
	crimson: "bg-cover-crimson",
	ink: "bg-cover-ink",
	brass: "bg-cover-brass",
	wine: "bg-cover-wine",
	ash: "bg-cover-ash",
	blood: "bg-cover-blood"
};
function BookCover({ book, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("cover-frame relative aspect-[2/3] overflow-hidden", coverClass[book.cover], className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 bottom-0 left-0 w-2 bg-bg/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-3 right-3 left-5 border border-accent/50 px-2 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-4 font-display text-lg leading-tight text-fg",
					children: book.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker mt-2 text-accent",
					children: book.wing
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute right-3 bottom-3 left-5 text-xs tracking-wide text-muted uppercase",
				children: book.edition
			})
		]
	});
}
function VaultApp() {
	const [entered, setEntered] = (0, import_react.useState)(false);
	const [openDoors, setOpenDoors] = (0, import_react.useState)(false);
	const [reduce, setReduce] = (0, import_react.useState)(false);
	const [wing, setWing] = (0, import_react.useState)("All");
	const [query, setQuery] = (0, import_react.useState)("");
	const [sort, setSort] = (0, import_react.useState)("shelf");
	const [folioId, setFolioId] = (0, import_react.useState)(null);
	const [cartOpen, setCartOpen] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [planId, setPlanId] = (0, import_react.useState)(null);
	const cart = useVault((state) => state.cart);
	const shelf = useVault((state) => state.shelf);
	const add = useVault((state) => state.add);
	const toggleShelf = useVault((state) => state.toggleShelf);
	const count = cart.reduce((sum, line) => sum + line.qty, 0);
	(0, import_react.useEffect)(() => {
		useVault.persist.rehydrate();
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setReduce(true);
			setOpenDoors(true);
			setEntered(true);
			return;
		}
		const openTimer = window.setTimeout(() => setOpenDoors(true), 450);
		const enterTimer = window.setTimeout(() => setEntered(true), 2700);
		return () => {
			window.clearTimeout(openTimer);
			window.clearTimeout(enterTimer);
		};
	}, []);
	const shown = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLowerCase();
		const list = books.filter((book) => {
			const inWing = wing === "All" || book.wing === wing;
			const inQuery = needle.length === 0 || book.title.toLowerCase().includes(needle) || book.author.toLowerCase().includes(needle);
			return inWing && inQuery;
		});
		if (sort === "price") return [...list].sort((a, b) => a.price - b.price);
		if (sort === "title") return [...list].sort((a, b) => a.title.localeCompare(b.title));
		return list;
	}, [
		query,
		sort,
		wing
	]);
	function enterNow() {
		setOpenDoors(true);
		setEntered(true);
	}
	function addBook(book) {
		add(book.id);
		toast.success(`${book.title} is on the ledger`);
	}
	const folio = folioId ? findBook(folioId) : void 0;
	const plan = plans.find((item) => item.id === planId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "top-center",
				toastOptions: { style: {
					background: "var(--color-surface)",
					color: "var(--color-fg)",
					border: "1px solid var(--color-border)",
					fontFamily: "var(--font-sans)"
				} }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-0 z-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryBackdrop, {
					open: openDoors,
					reduce
				})
			}),
			entered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-border/80 bg-bg/75 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#hall",
							className: "font-display text-2xl leading-none text-fg",
							children: "E-Book Vault"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "ml-6 hidden items-center gap-5 md:flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, { onPick: () => setMenu(false) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "press hidden h-11 items-center gap-2 px-3 text-sm text-muted md:inline-flex",
									onClick: () => {
										document.getElementById("stacks")?.scrollIntoView();
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
											className: "size-4",
											"aria-hidden": "true"
										}),
										"Shelf ",
										shelf.length
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "press inline-flex h-11 items-center gap-2 border border-border bg-surface px-3 text-sm text-fg",
									onClick: () => setCartOpen(true),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
											className: "size-4",
											"aria-hidden": "true"
										}),
										"Ledger",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-5 bg-primary px-1.5 text-center text-xs text-on-primary",
											children: count
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "press inline-flex size-11 items-center justify-center border border-border md:hidden",
									"aria-expanded": menu,
									"aria-label": menu ? "Close menu" : "Open menu",
									onClick: () => setMenu((value) => !value),
									children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								})
							]
						})
					]
				}), menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col gap-1 border-t border-border px-4 py-3 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, { onPick: () => setMenu(false) })
				}) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "hall",
					className: "relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pt-24 pb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("mx-auto w-full max-w-6xl", entered && "rise"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-accent",
								children: "BookBloom · @bookbloom.co"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "title-shadow mt-4 max-w-3xl font-display text-5xl leading-none text-fg sm:text-7xl",
								children: "A private library that opens like a house."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-base text-fg sm:text-lg",
								children: "E-Book Vault is the night residence of BookBloom. Shop the editions, keep a shelf, or take a key to the membership wings."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#stacks",
									className: "press inline-flex h-12 items-center gap-2 bg-primary px-5 text-sm font-medium text-on-primary",
									children: ["Enter the stacks", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4",
										"aria-hidden": "true"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#keys",
									className: "press inline-flex h-12 items-center gap-2 border border-accent/70 bg-bg/50 px-5 text-sm text-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
										className: "size-4 text-accent",
										"aria-hidden": "true"
									}), "Request a key"]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-10 grid w-full max-w-6xl grid-cols-2 gap-3 lg:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: DoorOpen,
								title: "The doors",
								copy: "The house opens on arrival. No feed behind them.",
								delay: "d1",
								show: entered
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: Library,
								title: "Five wings",
								copy: "Gothic, letters, observatory, atlas, and night.",
								delay: "d2",
								show: entered
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: BookOpen,
								title: "Editions you keep",
								copy: "Cloth, ribbon, and proof copies. Not rentals.",
								delay: "d3",
								show: entered
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: Moon,
								title: "Night room",
								copy: "A membership without ads, ranks, or noise.",
								delay: "d4",
								show: entered
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "stacks",
					className: "relative z-10 border-t border-border bg-bg px-4 py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-end justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "kicker text-accent",
										children: "Commerce"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-4xl text-fg sm:text-5xl",
										children: "The stacks"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-xl text-muted",
										children: "Twelve house editions. Add one to the ledger or set it on your private shelf."
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [shown.length, " on this wall"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-4 lg:flex-row lg:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "stack-search",
										className: "text-xs tracking-widest text-muted uppercase",
										children: "Search the stacks"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex h-12 items-center gap-2 border border-border bg-surface px-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
											className: "size-4 shrink-0 text-accent",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "stack-search",
											value: query,
											onChange: (event) => setQuery(event.target.value),
											placeholder: "Title or keeper",
											className: "h-full w-full bg-transparent text-sm text-fg outline-none placeholder:text-muted"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "stack-sort",
									className: "text-xs tracking-widest text-muted uppercase",
									children: "Order"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "stack-sort",
									value: sort,
									onChange: (event) => setSort(event.target.value),
									className: "mt-2 h-12 w-full border border-border bg-surface px-3 text-sm text-fg lg:w-48",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "shelf",
											children: "As shelved"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "price",
											children: "Price"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "title",
											children: "Title"
										})
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex gap-2 overflow-x-auto pb-1",
								children: wings.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": wing === item,
									onClick: () => setWing(item),
									className: cn("press h-11 shrink-0 border px-4 text-sm", wing === item ? "border-primary bg-primary text-on-primary" : "border-border bg-surface text-fg"),
									children: item === "All" ? "All wings" : item
								}, item))
							}),
							shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 border border-border bg-surface px-6 py-12 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl text-fg",
									children: "That volume is not in the house."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "press mt-4 h-11 border border-accent px-4 text-sm text-fg",
									onClick: () => {
										setQuery("");
										setWing("All");
									},
									children: "Return to the full wall"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "shelf-view mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4",
								children: shown.map((book) => {
									const saved = shelf.includes(book.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "tome h-full border border-border bg-surface",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "block w-full text-left",
											onClick: () => setFolioId(book.id),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookCover, { book }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "px-3 pt-3 pb-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "font-display text-2xl leading-none text-fg",
														children: book.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-sm text-muted",
														children: book.author
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-sm text-fg",
														children: money(book.price)
													})
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2 px-3 pb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-pressed": saved,
												"aria-label": saved ? `Remove ${book.title} from shelf` : `Save ${book.title} to shelf`,
												className: cn("press inline-flex size-11 items-center justify-center border", saved ? "border-accent bg-accent text-bg" : "border-border text-fg"),
												onClick: () => {
													toggleShelf(book.id);
													toast(saved ? "Lifted off your shelf" : "Set on your shelf");
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												className: "press inline-flex h-11 flex-1 items-center justify-center gap-2 bg-primary text-sm text-on-primary",
												onClick: () => addBook(book),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
													className: "size-4",
													"aria-hidden": "true"
												}), "Ledger"]
											})]
										})]
									}) }, book.id);
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "keys",
					className: "relative z-10 border-t border-border bg-surface px-4 py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-accent",
								children: "Membership"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 max-w-2xl font-display text-4xl text-fg sm:text-5xl",
								children: "Keys to the house"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-muted",
								children: "A quiet subscription. No cards are taken in the vault — reserving a key asks the house to write you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4",
								children: plans.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: cn("flex flex-col border bg-bg p-5", "featured" in item && item.featured ? "border-accent" : "border-border"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs tracking-widest text-accent uppercase",
											children: item.cadence
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-3xl text-fg",
											children: item.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 font-display text-4xl text-fg",
											children: [item.price === 0 ? "Open" : money(item.price), item.price > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-1 font-sans text-sm text-muted",
												children: "/ mo"
											}) : null]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm text-muted",
											children: item.note
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-4 flex-1 space-y-2 text-sm text-fg",
											children: item.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
													className: "mt-0.5 size-4 shrink-0 text-accent",
													"aria-hidden": "true"
												}), point]
											}, point))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "press mt-6 h-11 border border-primary bg-primary text-sm text-on-primary",
											onClick: () => setPlanId(item.id),
											children: ["Reserve ", item.name]
										})
									]
								}, item.id))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "relative z-10 border-t border-border bg-bg px-4 py-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl text-fg",
							children: "E-Book Vault"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "BookBloom · @bookbloom.co · bookbloom.co4u.com" })]
					})
				})
			] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 flex flex-col items-center justify-between px-5 py-10 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-accent",
						children: "BookBloom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-bg/70 px-6 py-5 text-center backdrop-blur-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker text-fg",
								children: openDoors ? "The doors are opening" : "The house is shut"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "title-shadow mt-3 font-display text-6xl leading-none text-fg sm:text-8xl",
								children: "E-Book Vault"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-md text-sm text-fg sm:text-base",
								children: "A rich mansion library. Noir red, candle brass, and the editions inside."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "press inline-flex h-12 items-center gap-2 bg-primary px-5 text-sm font-medium text-on-primary",
							onClick: enterNow,
							children: ["Enter the library", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorOpen, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "press h-12 px-4 text-sm text-fg",
							onClick: enterNow,
							children: "Skip the doors"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folio, {
				book: folio,
				saved: folio ? shelf.includes(folio.id) : false,
				onOpenChange: (next) => {
					if (!next) setFolioId(null);
				},
				onAdd: () => {
					if (!folio) return;
					addBook(folio);
				},
				onShelf: () => {
					if (!folio) return;
					const saved = shelf.includes(folio.id);
					toggleShelf(folio.id);
					toast(saved ? "Lifted off your shelf" : "Set on your shelf");
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartSheet, {
				open: cartOpen,
				onOpenChange: setCartOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(plan),
				onOpenChange: (next) => !next && setPlanId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "fixed top-1/2 left-1/2 z-50 max-h-[min(90svh,40rem)] w-[min(100%-1.5rem,32rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-border bg-surface p-6",
					children: plan ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReserveForm, {
						planName: plan.name,
						planId: plan.id,
						onDone: () => setPlanId(null)
					}) : null
				})] })
			})
		]
	});
}
function NavLinks({ onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: [
		["Hall", "#hall"],
		["Stacks", "#stacks"],
		["Keys", "#keys"],
		["House", "#house"]
	].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		onClick: onPick,
		className: "inline-flex h-11 items-center text-sm text-muted hover:text-fg",
		children: label
	}, href)) });
}
function Feature({ icon: Icon, title, copy, delay, show }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("glass px-4 py-4", show && "rise", show && delay),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-5 text-accent",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-2xl leading-none text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: copy
			})
		]
	});
}
function House() {
	const orders = useVault((state) => state.orders);
	const reserved = useVault((state) => state.reservedPlan);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "house",
		className: "relative z-10 border-t border-border bg-bg px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-accent",
					children: "Portfolio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-3xl font-display text-4xl text-fg sm:text-5xl",
					children: "BookBloom built a house and then filled it with books."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: "The vault is the residence, the shop, and the membership. Three rooms. One address. The doors open inward so the library can keep you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: [
						{
							icon: Compass,
							title: "The night stair",
							copy: "Visitors come in through the iron doors. The stair remembers who stayed for a second chapter."
						},
						{
							icon: Feather,
							title: "The bindery",
							copy: "Each edition is cut for the vault: cloth, ribbon, salt linen. The file is yours after the ledger clears."
						},
						{
							icon: Mail,
							title: "The house post",
							copy: "Write bookbloom.co4u.com. The mark on the door is @bookbloom.co."
						}
					].map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border border-border bg-surface p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(room.icon, {
								className: "size-5 text-accent",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-3xl text-fg",
								children: room.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: room.copy
							})
						]
					}, room.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 border border-border bg-surface-2 p-5 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-4xl text-fg",
							children: ["12", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-sans text-sm text-muted",
								children: "editions in the hall"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-4xl text-fg",
							children: ["5", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-sans text-sm text-muted",
								children: "wings after dark"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-4xl text-fg",
							children: ["1", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-sans text-sm text-muted",
								children: "ledger, no shouting"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-6 border-l-2 border-accent pl-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-fg italic",
						children: "“Guests ask where the owner sleeps. The house, offended, offers them a chair.”"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-2 text-sm text-muted",
						children: "I. Voss, night librarian of the vault"
					})]
				}),
				(orders[0] || reserved) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-muted",
					children: [reserved ? `Key requested: ${reserved}. ` : "", orders[0] ? `Last ledger mark ${orders[0].id}.` : ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "mailto:hello@bookbloom.co4u.com",
					className: "press mt-6 inline-flex h-12 items-center gap-2 border border-accent px-5 text-sm text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
						className: "size-4 text-accent",
						"aria-hidden": "true"
					}), "Write bookbloom.co4u.com"]
				})
			]
		})
	});
}
function Folio({ book, saved, onOpenChange, onAdd, onShelf }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(book),
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "fixed top-1/2 left-1/2 z-50 max-h-[min(92svh,44rem)] w-[min(100%-1.5rem,46rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-border bg-surface p-5 sm:p-7",
			children: book ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-[11rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookCover, { book }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						className: "press absolute top-3 right-3 inline-flex size-11 items-center justify-center text-fg",
						"aria-label": "Close folio",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-accent uppercase",
						children: book.wing
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mt-2 font-display text-4xl leading-none text-fg",
						children: book.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
						className: "mt-2 text-sm text-muted",
						children: [
							book.author,
							" · ",
							book.year,
							" · ",
							book.pages,
							" pages · ",
							book.edition
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-fg",
						children: book.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-4 border-l-2 border-primary pl-3 font-display text-xl text-fg italic",
						children: book.excerpt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-3xl text-fg",
						children: money(book.price)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "press h-11 bg-primary px-4 text-sm text-on-primary",
							onClick: onAdd,
							children: "Add to the ledger"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "press h-11 border border-border px-4 text-sm text-fg",
							onClick: onShelf,
							children: saved ? "On your shelf" : "Save to shelf"
						})]
					})
				] })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "sr-only",
				children: "Folio"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
				className: "sr-only",
				children: "Book details"
			})] })
		})] })
	});
}
function CartSheet({ open, onOpenChange }) {
	const cart = useVault((state) => state.cart);
	const setQty = useVault((state) => state.setQty);
	const remove = useVault((state) => state.remove);
	const placeOrder = useVault((state) => state.placeOrder);
	const [step, setStep] = (0, import_react.useState)("bag");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [receipt, setReceipt] = (0, import_react.useState)(null);
	const lines = cart.map((line) => {
		const book = findBook(line.id);
		return book ? {
			book,
			qty: line.qty
		} : null;
	}).filter((line) => Boolean(line));
	const total = lines.reduce((sum, line) => sum + line.book.price * line.qty, 0);
	function submit() {
		if (name.trim().length < 2) {
			setError("The house needs a name.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			setError("That post address will not travel.");
			return;
		}
		const order = {
			id: `EV-${Math.floor(1e3 + Math.random() * 9e3)}`,
			name: name.trim(),
			email: email.trim(),
			note: note.trim(),
			lines: lines.map((line) => ({
				id: line.book.id,
				qty: line.qty
			})),
			total,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		placeOrder(order);
		setReceipt(order);
		setStep("done");
		setError("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			onOpenChange(next);
			if (!next) {
				setStep("bag");
				setError("");
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-bg/75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-3xl text-fg",
							children: "The ledger"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "sr-only",
							children: "Editions waiting for a house invoice."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							className: "press inline-flex size-11 items-center justify-center",
							"aria-label": "Close ledger",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto px-5 py-4",
					children: [
						step === "done" && receipt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-accent uppercase",
								children: "Request received"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-4xl text-fg",
								children: receipt.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-muted",
								children: [
									"Nothing was charged. The house will send an invoice to ",
									receipt.email,
									". You can also write bookbloom.co4u.com."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm text-fg",
								children: ["Total noted ", money(receipt.total)]
							})
						] }) : null,
						step === "bag" ? lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "The ledger is clear. The stacks are through the hall."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 border-b border-border pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-16 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookCover, { book: line.book })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-2xl leading-none text-fg",
											children: line.book.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: money(line.book.price)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "press inline-flex size-11 items-center justify-center border border-border",
													"aria-label": `Fewer copies of ${line.book.title}`,
													onClick: () => setQty(line.book.id, line.qty - 1),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-6 text-center text-sm",
													children: line.qty
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "press inline-flex size-11 items-center justify-center border border-border",
													"aria-label": `More copies of ${line.book.title}`,
													onClick: () => setQty(line.book.id, line.qty + 1),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: "press ml-auto h-11 px-2 text-sm text-muted",
													onClick: () => remove(line.book.id),
													children: "Remove"
												})
											]
										})
									]
								})]
							}, line.book.id))
						}) : null,
						step === "post" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "space-y-4",
							onSubmit: (event) => {
								event.preventDefault();
								submit();
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: "This is a house request, not a card charge. We note the editions and send the invoice to your post."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "ledger-name",
									className: "text-xs tracking-widest text-muted uppercase",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "ledger-name",
									value: name,
									onChange: (event) => setName(event.target.value),
									autoComplete: "name",
									className: "mt-2 h-12 w-full border border-border bg-bg px-3 text-sm text-fg"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "ledger-email",
									className: "text-xs tracking-widest text-muted uppercase",
									children: "Post"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "ledger-email",
									type: "email",
									value: email,
									onChange: (event) => setEmail(event.target.value),
									autoComplete: "email",
									className: "mt-2 h-12 w-full border border-border bg-bg px-3 text-sm text-fg"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "ledger-note",
									className: "text-xs tracking-widest text-muted uppercase",
									children: "Note for the binder"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "ledger-note",
									value: note,
									onChange: (event) => setNote(event.target.value),
									rows: 3,
									className: "mt-2 w-full border border-border bg-bg px-3 py-2 text-sm text-fg"
								})] }),
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									role: "alert",
									className: "text-sm text-primary-bright",
									children: error
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "press h-12 w-full bg-primary text-sm text-on-primary",
									children: ["Send the request · ", money(total)]
								})
							]
						}) : null
					]
				}),
				step === "bag" && lines.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center justify-between text-sm text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Noted total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl",
							children: money(total)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press mt-3 h-12 w-full bg-primary text-sm text-on-primary",
						onClick: () => setStep("post"),
						children: "Settle with the house"
					})]
				}) : null
			]
		})] })
	});
}
function ReserveForm({ planName, planId, onDone }) {
	const reserve = useVault((state) => state.reserve);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	return done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
			className: "font-display text-4xl text-fg",
			children: "The key is noted."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
			className: "mt-3 text-sm text-muted",
			children: [planName, " is reserved under your post. The house replies from bookbloom.co4u.com. Nothing is billed here."]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "press mt-6 h-11 bg-primary px-4 text-sm text-on-primary",
			children: "Close"
		})
	] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: (event) => {
			event.preventDefault();
			if (name.trim().length < 2) {
				setError("The house needs a name.");
				return;
			}
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
				setError("That post address will not travel.");
				return;
			}
			reserve(planId);
			setDone(true);
			toast.success(`${planName} key requested`);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-accent uppercase",
				children: "Membership"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
				className: "mt-2 font-display text-4xl text-fg",
				children: ["Reserve ", planName]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
				className: "sr-only",
				children: [
					"Ask the house to reserve the ",
					planName,
					" key. No card is charged."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
				className: "press absolute top-3 right-3 inline-flex size-11 items-center justify-center",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "key-name",
					className: "text-xs tracking-widest text-muted uppercase",
					children: "Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "key-name",
					value: name,
					onChange: (event) => setName(event.target.value),
					autoComplete: "name",
					className: "mt-2 h-12 w-full border border-border bg-bg px-3 text-sm text-fg"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "key-email",
					className: "text-xs tracking-widest text-muted uppercase",
					children: "Post"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "key-email",
					type: "email",
					value: email,
					onChange: (event) => setEmail(event.target.value),
					autoComplete: "email",
					className: "mt-2 h-12 w-full border border-border bg-bg px-3 text-sm text-fg"
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mt-3 text-sm text-primary-bright",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "press mt-5 h-12 w-full bg-primary text-sm text-on-primary",
				children: "Ask the house to write"
			})
		]
	});
}
var SplitComponent = VaultApp;
//#endregion
export { SplitComponent as component };
