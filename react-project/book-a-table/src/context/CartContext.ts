import { createContext } from "react";
import { Order } from "../hooks/useOrder";

type CartContextType = {
  cartItems: Order[];
  addToCart: (item: Order) => void;
  deleteFromCart: (itemId: string, customerId: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export { CartContext };
