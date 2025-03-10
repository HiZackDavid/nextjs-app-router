import Image from "next/image";
import styles from "./ProductDetails.module.css";

export interface IProduct {
  _id: string;
  title: string;
  imageName: string;
  price: number;
}

const ProductDetails = ({ product }: { product: IProduct }) => {
  return (
    <div className={styles.product}>
      <Image
        src={`/images/albums/${product.imageName}`}
        width={325}
        height={325}
        alt={product.title}
      />
      <div>{product.title}</div>
      <div>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </div>
    </div>
  );
};

export default ProductDetails;
