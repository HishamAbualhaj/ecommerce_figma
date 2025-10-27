import React, { createContext, useEffect, useState } from "react";
import type { ProductType } from "../types";
interface CartContextType {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeQuantity: (product: ProductType) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: ProductType) => {
    setCart((prev) => {
      const isFound = prev.find((p) => p.id === product.id);

      if (isFound) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }

      return [...prev, { ...product }];
    });
  };

  const removeQuantity = (product: ProductType) => {
    setCart((prev) => {
      const isFound = prev.find((p) => p.id === product.id);

      if (isFound) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) - 1 } : p
        );
      }

      return [...prev];
    });
  };
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
