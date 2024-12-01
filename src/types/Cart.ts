import { ProductProps } from "./Product";

export interface CartItem extends ProductProps {
  quantity: number;
}

export interface CartProps {
  items: CartItem[];
  invoice: {
    totalPrice: number;
  };
  // Actions
  actions: {
    addItem: (item: ProductProps) => void;
    removeItem: (item: CartItem) => void;
  };
}
