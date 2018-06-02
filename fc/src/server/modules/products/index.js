import makeAxiosInstance from "../../utils/makeAxiosInstance";
import typeDefs from "./schema.gql";
import { ProductLoader } from "./loader";
import resolvers from "./resolvers";
import cdnConfig from "../../config/cdn";

export default {
  namespace: "Akeneo.Products",
  context: { Product: ProductLoader(makeAxiosInstance(), cdnConfig.url) },
  typeDefs,
  resolvers
};
