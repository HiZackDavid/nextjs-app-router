import { getProducts } from "./actions";
import styles from "./Catalog.module.css";
import ProductDetails from "./ProductDetails";

export const revalidate = 30;

const Catalog = async () => {
  const products = await getProducts();

  return (
    <div>
      <ul className={styles.products}>
        {products.map((product, index) => (
          <li key={index}>
            <ProductDetails product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
