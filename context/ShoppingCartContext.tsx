"use client";

import { IProduct } from "@/app/catalog/ProductDetails";
import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  function addToCart(product: IProduct) {
    setCart([...cart, product]);
  }

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export default ShoppingCartProvider;
