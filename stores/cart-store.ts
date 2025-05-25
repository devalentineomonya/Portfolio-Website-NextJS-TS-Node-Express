import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CartItem = {
  productId: string;
  quantity: number;
  price: number;
  name: string;
  image: string;
  size: string;
};

type CartStore = {
  items: CartItem[];
  total: number;
  clearCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (productId: string, size: string) => void;
  increaseQuantity: (productId: string, size: string) => void;
  decreaseQuantity: (productId: string, size: string) => void;
};

const calculateTotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === item.productId && i.size === item.size
          );
          const newItems = existing
            ? state.items.map((i) =>
                i.productId === item.productId && i.size === item.size
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              )
            : [...state.items, { ...item, quantity: 1 }];

          return {
            items: newItems,
            total: calculateTotal(newItems),
          };
        }),
      removeItem: (productId, size) =>
        set((state) => {
          const newItems = state.items.filter(
            (i) => !(i.productId === productId && i.size === size)
          );
          return {
            items: newItems,
            total: calculateTotal(newItems),
          };
        }),
      clearCart: () =>
        set(() => ({
          items: [],
          total: 0,
        })),
      increaseQuantity: (productId, size) =>
        set((state) => {
          const newItems = state.items.map((i) =>
            i.productId === productId && i.size === size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
          return {
            items: newItems,
            total: calculateTotal(newItems),
          };
        }),
      decreaseQuantity: (productId, size) =>
        set((state) => {
          const newItems = state.items
            .map((i) => {
              if (i.productId === productId && i.size === size) {
                return i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i;
              }
              return i;
            })
            .filter((i) => i.quantity > 0);

          return {
            items: newItems,
            total: calculateTotal(newItems),
          };
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      migrate: (persistedState, version) => {
        const state = persistedState as CartStore;
        return {
          ...state,
          total: calculateTotal(state.items),
        };
      },
    }
  )
);
