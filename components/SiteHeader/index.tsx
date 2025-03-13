"use client";

import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import styles from "./SiteHeader.module.css";
import { useShoppingCart } from "@/context/ShoppingCartContext";

const SiteHeader = () => {
  const { cart } = useShoppingCart();

  return (
    <div className={styles.container}>
      <Image src={logo} alt="" height={53} width={135} />
      <Link href="/">Home</Link>
      <Link href="/catalog">Catalog</Link>
      <div className={styles.cart}>
        Cart <div className={styles.cartCount}>{cart.length}</div>
      </div>
    </div>
  );
};

export default SiteHeader;
