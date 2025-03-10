import styles from "./Catalog.module.css";
import ProductDetails from "./ProductDetails";
import products from "./products.json";

const Catalog = () => {
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
