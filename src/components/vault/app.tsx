import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowRight,
  Bookmark,
  BookOpen,
  Check,
  Compass,
  DoorOpen,
  Feather,
  KeyRound,
  Library,
  Mail,
  Menu,
  Minus,
  Moon,
  Plus,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast, Toaster } from "sonner";
import { books, findBook, money, plans, wings, type Book, type Wing } from "@/data/catalog";
import { cn } from "@/lib/cn";
import { useVault, type HouseOrder } from "@/lib/vault-store";
import { LibraryBackdrop } from "@/components/vault/scene";

const coverClass: Record<Book["cover"], string> = {
  crimson: "bg-cover-crimson",
  ink: "bg-cover-ink",
  brass: "bg-cover-brass",
  wine: "bg-cover-wine",
  ash: "bg-cover-ash",
  blood: "bg-cover-blood",
};

function BookCover({ book, className }: { book: Book; className?: string }) {
  return (
    <div className={cn("cover-frame relative aspect-[2/3] overflow-hidden", coverClass[book.cover], className)}>
      <div className="absolute top-0 bottom-0 left-0 w-2 bg-bg/50" />
      <div className="absolute top-3 right-3 left-5 border border-accent/50 px-2 py-3">
        <p className="line-clamp-4 font-display text-lg leading-tight text-fg">{book.title}</p>
        <p className="kicker mt-2 text-accent">{book.wing}</p>
      </div>
      <p className="absolute right-3 bottom-3 left-5 text-xs tracking-wide text-muted uppercase">
        {book.edition}
      </p>
    </div>
  );
}

export function VaultApp() {
  const [entered, setEntered] = useState(false);
  const [openDoors, setOpenDoors] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [wing, setWing] = useState<Wing | "All">("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"shelf" | "price" | "title">("shelf");
  const [folioId, setFolioId] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [planId, setPlanId] = useState<string | null>(null);

  const cart = useVault((state) => state.cart);
  const shelf = useVault((state) => state.shelf);
  const add = useVault((state) => state.add);
  const toggleShelf = useVault((state) => state.toggleShelf);
  const count = cart.reduce((sum, line) => sum + line.qty, 0);

  useEffect(() => {
    void useVault.persist.rehydrate();
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
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

  const shown = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const list = books.filter((book) => {
      const inWing = wing === "All" || book.wing === wing;
      const inQuery =
        needle.length === 0 ||
        book.title.toLowerCase().includes(needle) ||
        book.author.toLowerCase().includes(needle);
      return inWing && inQuery;
    });
    if (sort === "price") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "title") return [...list].sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [query, sort, wing]);

  function enterNow() {
    setOpenDoors(true);
    setEntered(true);
  }

  function addBook(book: Book) {
    add(book.id);
    toast.success(`${book.title} is on the ledger`);
  }

  const folio = folioId ? findBook(folioId) : undefined;
  const plan = plans.find((item) => item.id === planId);

  return (
    <div className="relative min-h-screen">
      <Toaster
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--color-surface)",
            color: "var(--color-fg)",
            border: "1px solid var(--color-border)",
            fontFamily: "var(--font-sans)",
          },
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0">
        <LibraryBackdrop open={openDoors} reduce={reduce} />
      </div>

      {entered ? (
      <>
      <header className="sticky top-0 z-30 border-b border-border/80 bg-bg/75 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
          <a href="#hall" className="font-display text-2xl leading-none text-fg">
            E-Book Vault
          </a>
          <nav className="ml-6 hidden items-center gap-5 md:flex">
            <NavLinks onPick={() => setMenu(false)} />
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              className="press hidden h-11 items-center gap-2 px-3 text-sm text-muted md:inline-flex"
              onClick={() => {
                document.getElementById("stacks")?.scrollIntoView();
              }}
            >
              <Bookmark className="size-4" aria-hidden="true" />
              Shelf {shelf.length}
            </button>
            <button
              type="button"
              className="press inline-flex h-11 items-center gap-2 border border-border bg-surface px-3 text-sm text-fg"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="size-4" aria-hidden="true" />
              Ledger
              <span className="min-w-5 bg-primary px-1.5 text-center text-xs text-on-primary">{count}</span>
            </button>
            <button
              type="button"
              className="press inline-flex size-11 items-center justify-center border border-border md:hidden"
              aria-expanded={menu}
              aria-label={menu ? "Close menu" : "Open menu"}
              onClick={() => setMenu((value) => !value)}
            >
              {menu ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {menu ? (
          <nav className="flex flex-col gap-1 border-t border-border px-4 py-3 md:hidden">
            <NavLinks
              onPick={() => setMenu(false)}
            />
          </nav>
        ) : null}
      </header>

      <main>
        <section id="hall" className="relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pt-24 pb-10">
          <div className={cn("mx-auto w-full max-w-6xl", entered && "rise")}>
            <p className="kicker text-accent">BookBloom · @bookbloom.co</p>
            <h1 className="title-shadow mt-4 max-w-3xl font-display text-5xl leading-none text-fg sm:text-7xl">
              A private library that opens like a house.
            </h1>
            <p className="mt-5 max-w-xl text-base text-fg sm:text-lg">
              E-Book Vault is the night residence of BookBloom. Shop the editions, keep a shelf, or take a key to the membership wings.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#stacks"
                className="press inline-flex h-12 items-center gap-2 bg-primary px-5 text-sm font-medium text-on-primary"
              >
                Enter the stacks
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#keys"
                className="press inline-flex h-12 items-center gap-2 border border-accent/70 bg-bg/50 px-5 text-sm text-fg"
              >
                <KeyRound className="size-4 text-accent" aria-hidden="true" />
                Request a key
              </a>
            </div>
          </div>
          <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-2 gap-3 lg:grid-cols-4">
            <Feature icon={DoorOpen} title="The doors" copy="The house opens on arrival. No feed behind them." delay="d1" show={entered} />
            <Feature icon={Library} title="Five wings" copy="Gothic, letters, observatory, atlas, and night." delay="d2" show={entered} />
            <Feature icon={BookOpen} title="Editions you keep" copy="Cloth, ribbon, and proof copies. Not rentals." delay="d3" show={entered} />
            <Feature icon={Moon} title="Night room" copy="A membership without ads, ranks, or noise." delay="d4" show={entered} />
          </div>
        </section>

        <section id="stacks" className="relative z-10 border-t border-border bg-bg px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="kicker text-accent">Commerce</p>
                <h2 className="mt-2 font-display text-4xl text-fg sm:text-5xl">The stacks</h2>
                <p className="mt-3 max-w-xl text-muted">
                  Twelve house editions. Add one to the ledger or set it on your private shelf.
                </p>
              </div>
              <p className="text-sm text-muted">{shown.length} on this wall</p>
            </div>

            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-end">
              <div className="min-w-0 flex-1">
                <label htmlFor="stack-search" className="text-xs tracking-widest text-muted uppercase">
                  Search the stacks
                </label>
                <div className="mt-2 flex h-12 items-center gap-2 border border-border bg-surface px-3">
                  <Search className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  <input
                    id="stack-search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Title or keeper"
                    className="h-full w-full bg-transparent text-sm text-fg outline-none placeholder:text-muted"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="stack-sort" className="text-xs tracking-widest text-muted uppercase">
                  Order
                </label>
                <select
                  id="stack-sort"
                  value={sort}
                  onChange={(event) => setSort(event.target.value as "shelf" | "price" | "title")}
                  className="mt-2 h-12 w-full border border-border bg-surface px-3 text-sm text-fg lg:w-48"
                >
                  <option value="shelf">As shelved</option>
                  <option value="price">Price</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {wings.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={wing === item}
                  onClick={() => setWing(item)}
                  className={cn(
                    "press h-11 shrink-0 border px-4 text-sm",
                    wing === item
                      ? "border-primary bg-primary text-on-primary"
                      : "border-border bg-surface text-fg",
                  )}
                >
                  {item === "All" ? "All wings" : item}
                </button>
              ))}
            </div>

            {shown.length === 0 ? (
              <div className="mt-8 border border-border bg-surface px-6 py-12 text-center">
                <p className="font-display text-3xl text-fg">That volume is not in the house.</p>
                <button
                  type="button"
                  className="press mt-4 h-11 border border-accent px-4 text-sm text-fg"
                  onClick={() => {
                    setQuery("");
                    setWing("All");
                  }}
                >
                  Return to the full wall
                </button>
              </div>
            ) : (
              <ul className="shelf-view mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {shown.map((book) => {
                  const saved = shelf.includes(book.id);
                  return (
                    <li key={book.id}>
                      <article className="tome h-full border border-border bg-surface">
                        <button type="button" className="block w-full text-left" onClick={() => setFolioId(book.id)}>
                          <BookCover book={book} />
                          <div className="px-3 pt-3 pb-2">
                            <h3 className="font-display text-2xl leading-none text-fg">{book.title}</h3>
                            <p className="mt-2 text-sm text-muted">{book.author}</p>
                            <p className="mt-2 text-sm text-fg">{money(book.price)}</p>
                          </div>
                        </button>
                        <div className="flex gap-2 px-3 pb-3">
                          <button
                            type="button"
                            aria-pressed={saved}
                            aria-label={saved ? `Remove ${book.title} from shelf` : `Save ${book.title} to shelf`}
                            className={cn(
                              "press inline-flex size-11 items-center justify-center border",
                              saved ? "border-accent bg-accent text-bg" : "border-border text-fg",
                            )}
                            onClick={() => {
                              toggleShelf(book.id);
                              toast(saved ? "Lifted off your shelf" : "Set on your shelf");
                            }}
                          >
                            <Bookmark className="size-4" />
                          </button>
                          <button
                            type="button"
                            className="press inline-flex h-11 flex-1 items-center justify-center gap-2 bg-primary text-sm text-on-primary"
                            onClick={() => addBook(book)}
                          >
                            <Plus className="size-4" aria-hidden="true" />
                            Ledger
                          </button>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>

        <section id="keys" className="relative z-10 border-t border-border bg-surface px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="kicker text-accent">Membership</p>
            <h2 className="mt-2 max-w-2xl font-display text-4xl text-fg sm:text-5xl">Keys to the house</h2>
            <p className="mt-3 max-w-xl text-muted">
              A quiet subscription. No cards are taken in the vault — reserving a key asks the house to write you.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {plans.map((item) => (
                <article
                  key={item.id}
                  className={cn(
                    "flex flex-col border bg-bg p-5",
                    "featured" in item && item.featured ? "border-accent" : "border-border",
                  )}
                >
                  <p className="text-xs tracking-widest text-accent uppercase">{item.cadence}</p>
                  <h3 className="mt-2 font-display text-3xl text-fg">{item.name}</h3>
                  <p className="mt-3 font-display text-4xl text-fg">
                    {item.price === 0 ? "Open" : money(item.price)}
                    {item.price > 0 ? <span className="ml-1 font-sans text-sm text-muted">/ mo</span> : null}
                  </p>
                  <p className="mt-3 text-sm text-muted">{item.note}</p>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-fg">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="press mt-6 h-11 border border-primary bg-primary text-sm text-on-primary"
                    onClick={() => setPlanId(item.id)}
                  >
                    Reserve {item.name}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <House />

        <footer className="relative z-10 border-t border-border bg-bg px-4 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-2xl text-fg">E-Book Vault</p>
            <p>BookBloom · @bookbloom.co · bookbloom.co4u.com</p>
          </div>
        </footer>
      </main>
      </>
      ) : (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-between px-5 py-10 sm:py-16">
          <p className="kicker text-accent">BookBloom</p>
            <div className="bg-bg/70 px-6 py-5 text-center backdrop-blur-md">
            <p className="kicker text-fg">
              {openDoors ? "The doors are opening" : "The house is shut"}
            </p>
            <h1 className="title-shadow mt-3 font-display text-6xl leading-none text-fg sm:text-8xl">E-Book Vault</h1>
            <p className="mx-auto mt-4 max-w-md text-sm text-fg sm:text-base">
              A rich mansion library. Noir red, candle brass, and the editions inside.
            </p>
            </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="press inline-flex h-12 items-center gap-2 bg-primary px-5 text-sm font-medium text-on-primary"
              onClick={enterNow}
            >
              Enter the library
              <DoorOpen className="size-4" aria-hidden="true" />
            </button>
            <button type="button" className="press h-12 px-4 text-sm text-fg" onClick={enterNow}>
              Skip the doors
            </button>
          </div>
        </div>
      )}

      <Folio
        book={folio}
        saved={folio ? shelf.includes(folio.id) : false}
        onOpenChange={(next) => {
          if (!next) setFolioId(null);
        }}
        onAdd={() => {
          if (!folio) return;
          addBook(folio);
        }}
        onShelf={() => {
          if (!folio) return;
          const saved = shelf.includes(folio.id);
          toggleShelf(folio.id);
          toast(saved ? "Lifted off your shelf" : "Set on your shelf");
        }}
      />

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />

      <Dialog.Root open={Boolean(plan)} onOpenChange={(next) => !next && setPlanId(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 max-h-[min(90svh,40rem)] w-[min(100%-1.5rem,32rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-border bg-surface p-6">
            {plan ? <ReserveForm planName={plan.name} planId={plan.id} onDone={() => setPlanId(null)} /> : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

function NavLinks({ onPick }: { onPick: () => void }) {
  const items = [
    ["Hall", "#hall"],
    ["Stacks", "#stacks"],
    ["Keys", "#keys"],
    ["House", "#house"],
  ];
  return (
    <>
      {items.map(([label, href]) => (
        <a key={href} href={href} onClick={onPick} className="inline-flex h-11 items-center text-sm text-muted hover:text-fg">
          {label}
        </a>
      ))}
    </>
  );
}

function Feature({
  icon: Icon,
  title,
  copy,
  delay,
  show,
}: {
  icon: typeof DoorOpen;
  title: string;
  copy: string;
  delay: string;
  show: boolean;
}) {
  return (
    <article className={cn("glass px-4 py-4", show && "rise", show && delay)}>
      <Icon className="size-5 text-accent" aria-hidden="true" />
      <h2 className="mt-3 font-display text-2xl leading-none text-fg">{title}</h2>
      <p className="mt-2 text-sm text-muted">{copy}</p>
    </article>
  );
}

function House() {
  const orders = useVault((state) => state.orders);
  const reserved = useVault((state) => state.reservedPlan);
  const rooms = [
    {
      icon: Compass,
      title: "The night stair",
      copy: "Visitors come in through the iron doors. The stair remembers who stayed for a second chapter.",
    },
    {
      icon: Feather,
      title: "The bindery",
      copy: "Each edition is cut for the vault: cloth, ribbon, salt linen. The file is yours after the ledger clears.",
    },
    {
      icon: Mail,
      title: "The house post",
      copy: "Write bookbloom.co4u.com. The mark on the door is @bookbloom.co.",
    },
  ];

  return (
    <section id="house" className="relative z-10 border-t border-border bg-bg px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="kicker text-accent">Portfolio</p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl text-fg sm:text-5xl">
          BookBloom built a house and then filled it with books.
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          The vault is the residence, the shop, and the membership. Three rooms. One address. The doors open inward so the library can keep you.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {rooms.map((room) => (
            <article key={room.title} className="border border-border bg-surface p-5">
              <room.icon className="size-5 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-display text-3xl text-fg">{room.title}</h3>
              <p className="mt-3 text-sm text-muted">{room.copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-4 border border-border bg-surface-2 p-5 sm:grid-cols-3">
          <p className="font-display text-4xl text-fg">
            12<span className="mt-1 block font-sans text-sm text-muted">editions in the hall</span>
          </p>
          <p className="font-display text-4xl text-fg">
            5<span className="mt-1 block font-sans text-sm text-muted">wings after dark</span>
          </p>
          <p className="font-display text-4xl text-fg">
            1<span className="mt-1 block font-sans text-sm text-muted">ledger, no shouting</span>
          </p>
        </div>
        <blockquote className="mt-6 border-l-2 border-accent pl-4">
          <p className="font-display text-2xl text-fg italic">
            “Guests ask where the owner sleeps. The house, offended, offers them a chair.”
          </p>
          <footer className="mt-2 text-sm text-muted">I. Voss, night librarian of the vault</footer>
        </blockquote>
        {(orders[0] || reserved) && (
          <p className="mt-6 text-sm text-muted">
            {reserved ? `Key requested: ${reserved}. ` : ""}
            {orders[0] ? `Last ledger mark ${orders[0].id}.` : ""}
          </p>
        )}
        <a
          href="mailto:hello@bookbloom.co4u.com"
          className="press mt-6 inline-flex h-12 items-center gap-2 border border-accent px-5 text-sm text-fg"
        >
          <Mail className="size-4 text-accent" aria-hidden="true" />
          Write bookbloom.co4u.com
        </a>
      </div>
    </section>
  );
}

function Folio({
  book,
  saved,
  onOpenChange,
  onAdd,
  onShelf,
}: {
  book?: Book;
  saved: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: () => void;
  onShelf: () => void;
}) {
  return (
    <Dialog.Root open={Boolean(book)} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 max-h-[min(92svh,44rem)] w-[min(100%-1.5rem,46rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-border bg-surface p-5 sm:p-7">
          {book ? (
            <div className="grid gap-6 sm:grid-cols-[11rem_1fr]">
              <BookCover book={book} />
              <div>
                <Dialog.Close className="press absolute top-3 right-3 inline-flex size-11 items-center justify-center text-fg" aria-label="Close folio">
                  <X className="size-5" />
                </Dialog.Close>
                <p className="text-xs tracking-widest text-accent uppercase">{book.wing}</p>
                <Dialog.Title className="mt-2 font-display text-4xl leading-none text-fg">{book.title}</Dialog.Title>
                <Dialog.Description className="mt-2 text-sm text-muted">
                  {book.author} · {book.year} · {book.pages} pages · {book.edition}
                </Dialog.Description>
                <p className="mt-4 text-sm text-fg">{book.blurb}</p>
                <blockquote className="mt-4 border-l-2 border-primary pl-3 font-display text-xl text-fg italic">
                  {book.excerpt}
                </blockquote>
                <p className="mt-4 font-display text-3xl text-fg">{money(book.price)}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button type="button" className="press h-11 bg-primary px-4 text-sm text-on-primary" onClick={onAdd}>
                    Add to the ledger
                  </button>
                  <button type="button" className="press h-11 border border-border px-4 text-sm text-fg" onClick={onShelf}>
                    {saved ? "On your shelf" : "Save to shelf"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Dialog.Title className="sr-only">Folio</Dialog.Title>
              <Dialog.Description className="sr-only">Book details</Dialog.Description>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function CartSheet({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const cart = useVault((state) => state.cart);
  const setQty = useVault((state) => state.setQty);
  const remove = useVault((state) => state.remove);
  const placeOrder = useVault((state) => state.placeOrder);
  const [step, setStep] = useState<"bag" | "post" | "done">("bag");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [receipt, setReceipt] = useState<HouseOrder | null>(null);

  const lines = cart
    .map((line) => {
      const book = findBook(line.id);
      return book ? { book, qty: line.qty } : null;
    })
    .filter((line): line is { book: Book; qty: number } => Boolean(line));
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
    const order: HouseOrder = {
      id: `EV-${Math.floor(1000 + Math.random() * 9000)}`,
      name: name.trim(),
      email: email.trim(),
      note: note.trim(),
      lines: lines.map((line) => ({ id: line.book.id, qty: line.qty })),
      total,
      at: new Date().toISOString(),
    };
    placeOrder(order);
    setReceipt(order);
    setStep("done");
    setError("");
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) {
          setStep("bag");
          setError("");
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/75" />
        <Dialog.Content className="fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Dialog.Title className="font-display text-3xl text-fg">The ledger</Dialog.Title>
            <Dialog.Description className="sr-only">Editions waiting for a house invoice.</Dialog.Description>
            <Dialog.Close className="press inline-flex size-11 items-center justify-center" aria-label="Close ledger">
              <X className="size-5" />
            </Dialog.Close>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {step === "done" && receipt ? (
              <div>
                <p className="text-xs tracking-widest text-accent uppercase">Request received</p>
                <p className="mt-2 font-display text-4xl text-fg">{receipt.id}</p>
                <p className="mt-3 text-sm text-muted">
                  Nothing was charged. The house will send an invoice to {receipt.email}. You can also write bookbloom.co4u.com.
                </p>
                <p className="mt-4 text-sm text-fg">Total noted {money(receipt.total)}</p>
              </div>
            ) : null}
            {step === "bag" ? (
              lines.length === 0 ? (
                <p className="text-sm text-muted">The ledger is clear. The stacks are through the hall.</p>
              ) : (
                <ul className="space-y-4">
                  {lines.map((line) => (
                    <li key={line.book.id} className="flex gap-3 border-b border-border pb-4">
                      <div className="w-16 shrink-0">
                        <BookCover book={line.book} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-2xl leading-none text-fg">{line.book.title}</p>
                        <p className="mt-1 text-sm text-muted">{money(line.book.price)}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            className="press inline-flex size-11 items-center justify-center border border-border"
                            aria-label={`Fewer copies of ${line.book.title}`}
                            onClick={() => setQty(line.book.id, line.qty - 1)}
                          >
                            <Minus className="size-4" />
                          </button>
                          <span className="w-6 text-center text-sm">{line.qty}</span>
                          <button
                            type="button"
                            className="press inline-flex size-11 items-center justify-center border border-border"
                            aria-label={`More copies of ${line.book.title}`}
                            onClick={() => setQty(line.book.id, line.qty + 1)}
                          >
                            <Plus className="size-4" />
                          </button>
                          <button
                            type="button"
                            className="press ml-auto h-11 px-2 text-sm text-muted"
                            onClick={() => remove(line.book.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )
            ) : null}
            {step === "post" ? (
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  submit();
                }}
              >
                <p className="text-sm text-muted">
                  This is a house request, not a card charge. We note the editions and send the invoice to your post.
                </p>
                <div>
                  <label htmlFor="ledger-name" className="text-xs tracking-widest text-muted uppercase">
                    Name
                  </label>
                  <input
                    id="ledger-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                    className="mt-2 h-12 w-full border border-border bg-bg px-3 text-sm text-fg"
                  />
                </div>
                <div>
                  <label htmlFor="ledger-email" className="text-xs tracking-widest text-muted uppercase">
                    Post
                  </label>
                  <input
                    id="ledger-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    className="mt-2 h-12 w-full border border-border bg-bg px-3 text-sm text-fg"
                  />
                </div>
                <div>
                  <label htmlFor="ledger-note" className="text-xs tracking-widest text-muted uppercase">
                    Note for the binder
                  </label>
                  <textarea
                    id="ledger-note"
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    rows={3}
                    className="mt-2 w-full border border-border bg-bg px-3 py-2 text-sm text-fg"
                  />
                </div>
                {error ? (
                  <p role="alert" className="text-sm text-primary-bright">
                    {error}
                  </p>
                ) : null}
                <button type="submit" className="press h-12 w-full bg-primary text-sm text-on-primary">
                  Send the request · {money(total)}
                </button>
              </form>
            ) : null}
          </div>
          {step === "bag" && lines.length > 0 ? (
            <div className="border-t border-border px-5 py-4">
              <p className="flex items-center justify-between text-sm text-fg">
                <span>Noted total</span>
                <span className="font-display text-3xl">{money(total)}</span>
              </p>
              <button type="button" className="press mt-3 h-12 w-full bg-primary text-sm text-on-primary" onClick={() => setStep("post")}>
                Settle with the house
              </button>
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ReserveForm({ planName, planId, onDone }: { planName: string; planId: string; onDone: () => void }) {
  const reserve = useVault((state) => state.reserve);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  return done ? (
    <div>
      <Dialog.Title className="font-display text-4xl text-fg">The key is noted.</Dialog.Title>
      <Dialog.Description className="mt-3 text-sm text-muted">
        {planName} is reserved under your post. The house replies from bookbloom.co4u.com. Nothing is billed here.
      </Dialog.Description>
      <Dialog.Close className="press mt-6 h-11 bg-primary px-4 text-sm text-on-primary">Close</Dialog.Close>
    </div>
  ) : (
    <form
      onSubmit={(event) => {
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
      }}
    >
      <p className="text-xs tracking-widest text-accent uppercase">Membership</p>
      <Dialog.Title className="mt-2 font-display text-4xl text-fg">Reserve {planName}</Dialog.Title>
      <Dialog.Description className="sr-only">
        Ask the house to reserve the {planName} key. No card is charged.
      </Dialog.Description>
      <Dialog.Close className="press absolute top-3 right-3 inline-flex size-11 items-center justify-center" aria-label="Close">
        <X className="size-5" />
      </Dialog.Close>
      <div className="mt-5">
        <label htmlFor="key-name" className="text-xs tracking-widest text-muted uppercase">
          Name
        </label>
        <input
          id="key-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          className="mt-2 h-12 w-full border border-border bg-bg px-3 text-sm text-fg"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="key-email" className="text-xs tracking-widest text-muted uppercase">
          Post
        </label>
        <input
          id="key-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          className="mt-2 h-12 w-full border border-border bg-bg px-3 text-sm text-fg"
        />
      </div>
      {error ? (
        <p role="alert" className="mt-3 text-sm text-primary-bright">
          {error}
        </p>
      ) : null}
      <button type="submit" className="press mt-5 h-12 w-full bg-primary text-sm text-on-primary">
        Ask the house to write
      </button>
    </form>
  );
}
