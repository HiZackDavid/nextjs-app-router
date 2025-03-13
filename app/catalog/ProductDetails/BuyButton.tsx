"use client";

import { useShoppingCart } from "@/context/ShoppingCartContext";
import { IProduct } from ".";

interface IProps {
  product: IProduct;
}

const BuyButton = ({ product }: IProps) => {
  const { addToCart } = useShoppingCart();

  return <button onClick={() => addToCart(product)}>Buy</button>;
};

export default BuyButton;
