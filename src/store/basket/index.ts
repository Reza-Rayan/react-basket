import { create } from "zustand";
import { CartProps, CartItem } from "../../types/Cart";
import { ProductProps } from "../../types/Product";
import toast from "react-hot-toast";

// Helper to save state to localStorage
const saveToLocalStorage = (state: Omit<CartProps, "actions">) => {
  localStorage.setItem("basket", JSON.stringify(state));
};

// Helper to load state from localStorage
const loadFromLocalStorage = (): Omit<CartProps, "actions"> => {
  const storedData = localStorage.getItem("basket");
  return storedData
    ? JSON.parse(storedData)
    : { items: [], invoice: { totalPrice: 0 } };
};

export const useBasket = create<CartProps>((set, get) => ({
  ...loadFromLocalStorage(),

  actions: {
    addItem: (item: ProductProps) => {
      const { items, invoice } = get();
      const existingItem = items.find((_item) => _item.id === item.id);

      if (existingItem) {
        const updatedItems = items.map((_item) =>
          _item.id === item.id
            ? { ..._item, quantity: _item.quantity + 1 }
            : _item
        );
        const updatedInvoice = { totalPrice: invoice.totalPrice + item.price };

        set({ items: updatedItems, invoice: updatedInvoice });
      } else {
        const newItem: CartItem = { ...item, quantity: 1 };
        const updatedItems = [...items, newItem];
        const updatedInvoice = { totalPrice: invoice.totalPrice + item.price };

        set({ items: updatedItems, invoice: updatedInvoice });
        toast.success(`${item.title} به سبد خرید اضافه شد`);
      }

      saveToLocalStorage({ items: get().items, invoice: get().invoice });
    },

    removeItem: (item: CartItem) => {
      const { items, invoice } = get();

      const updatedItems =
        item.quantity === 1
          ? items.filter((_item) => _item.id !== item.id)
          : items.map((_item) =>
              _item.id === item.id
                ? { ..._item, quantity: _item.quantity - 1 }
                : _item
            );

      const updatedInvoice = { totalPrice: invoice.totalPrice - item.price };

      set({ items: updatedItems, invoice: updatedInvoice });
      saveToLocalStorage({ items: get().items, invoice: get().invoice });
    },
  },
}));
