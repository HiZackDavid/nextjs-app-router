"use server";

import { MongoClient } from "mongodb";
import { IProduct } from "./ProductDetails";

export async function getProducts() {
  const client = await MongoClient.connect(
    process.env.MONGODB_CONNECTION_STRING || ""
  );
  const collection = client.db("album-shop-dev").collection<IProduct>("albums");

  const albums = await collection.find({}).toArray();

  client.close();

  return albums;
}
