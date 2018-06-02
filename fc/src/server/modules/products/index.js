import client from "../../utils/client";
import typeDefs from "./schema.gql";
import { ProductLoader } from "./loader";
import resolvers from "./resolvers";

export default {
  namespace: "Akeneo.Products",
  context: { Product: ProductLoader(client) },
  typeDefs,
  resolvers
};
