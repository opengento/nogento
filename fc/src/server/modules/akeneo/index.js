import typeDefs from "./schema.gql";
import { ProductLoader } from "./loader";
import resolvers from "./resolvers";

export default {
  namespace: "Akeneo",
  context: { ProductLoader },
  typeDefs,
  resolvers
};
