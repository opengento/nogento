import makeAxiosInstance from "../../utils/makeAxiosInstance";
import typeDefs from "./schema.gql";
import { ProductLoader } from "./loader";
import resolvers from "./resolvers";

export default {
  namespace: "Akeneo.Products",
  context: { Product: ProductLoader(makeAxiosInstance()) },
  typeDefs,
  resolvers
};
