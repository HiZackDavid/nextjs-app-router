import Image from "next/image";
import styles from "./ProductDetails.module.css";
import Link from "next/link";

export interface IProduct {
  _id: string;
  title: string;
  imageName: string;
  price: number;
}

const ProductDetails = ({ product }: { product: IProduct }) => {
  return (
    <div className={styles.product}>
      <Link href={`/catalog/product-info/${product._id}`}>
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
      </Link>
    </div>
  );
};

export default ProductDetails;
