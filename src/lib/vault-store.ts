import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartLine = { id: string; qty: number };

export type HouseOrder = {
  id: string;
  name: string;
  email: string;
  note: string;
  lines: CartLine[];
  total: number;
  at: string;
};

type VaultState = {
  cart: CartLine[];
  shelf: string[];
  orders: HouseOrder[];
  reservedPlan: string | null;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clearCart: () => void;
  toggleShelf: (id: string) => void;
  placeOrder: (order: HouseOrder) => void;
  reserve: (planId: string) => void;
};

const memory = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const useVault = create<VaultState>()(
  persist(
    (set, get) => ({
      cart: [],
      shelf: [],
      orders: [],
      reservedPlan: null,
      add: (id) => {
        const cart = get().cart;
        const line = cart.find((item) => item.id === id);
        set({
          cart: line
            ? cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
            : [...cart, { id, qty: 1 }],
        });
      },
      setQty: (id, qty) => {
        if (qty < 1) {
          set({ cart: get().cart.filter((item) => item.id !== id) });
          return;
        }
        set({ cart: get().cart.map((item) => (item.id === id ? { ...item, qty } : item)) });
      },
      remove: (id) => set({ cart: get().cart.filter((item) => item.id !== id) }),
      clearCart: () => set({ cart: [] }),
      toggleShelf: (id) => {
        const shelf = get().shelf;
        set({
          shelf: shelf.includes(id) ? shelf.filter((item) => item !== id) : [...shelf, id],
        });
      },
      placeOrder: (order) => set({ orders: [order, ...get().orders], cart: [] }),
      reserve: (planId) => set({ reservedPlan: planId }),
    }),
    {
      name: "ebook-vault",
      skipHydration: true,
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memory : window.localStorage,
      ),
    },
  ),
);
