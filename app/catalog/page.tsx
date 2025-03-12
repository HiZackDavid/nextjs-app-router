import { MongoClient } from "mongodb";
import styles from "./Catalog.module.css";
import ProductDetails, { IProduct } from "./ProductDetails";

export const revalidate = 30;

const Catalog = async () => {
  async function getProducts() {
    const client = await MongoClient.connect(
      process.env.MONGODB_CONNECTION_STRING || ""
    );
    const collection = client
      .db("album-shop-dev")
      .collection<IProduct>("albums");

    const albums = await collection.find({}).toArray();

    client.close();

    return albums;
  }

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
