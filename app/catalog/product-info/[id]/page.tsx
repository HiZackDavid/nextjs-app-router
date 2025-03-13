"use client";

import { use, useEffect, useState } from "react";
import { getProducts } from "../../actions";
import { IProduct } from "../../ProductDetails";

interface IProductInfo {
  params: Promise<{ id: string }>;
}

const ProductInfo = ({ params }: IProductInfo) => {
  const { id } = use(params);
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    async function fetchProducts() {
      const products = await getProducts();
      const product = products.find((p) => p._id === id);
      setProduct(product);
    }
    fetchProducts();
  }, [id]);

  return <h2>ProductInfo Page for {product?.title}</h2>;
};

export default ProductInfo;
