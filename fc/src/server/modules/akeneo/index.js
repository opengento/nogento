import typeDefs from "./schema.gql";
import { ProductLoader, CategoryLoader } from "./loader";
import resolvers from "./resolvers";
import client from "./client";
import config from "./config/akeneo";
import axios from "axios";
import adapter from "./utils/adapter";

const axiosInstance = axios.create({
  baseURL: config.url,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 1000000000
});

export default {
  namespace: "Akeneo",
  context: {
    ProductLoader: ProductLoader(
      client(axiosInstance, config),
      adapter.adaptProducts
    ),
    CategoryLoader: CategoryLoader(client(axiosInstance, config), adapter)
  },
  typeDefs,
  resolvers
};
