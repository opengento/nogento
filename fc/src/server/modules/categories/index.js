import typeDefs from "./schema.gql";
import { CategoryLoader } from "./loader";
import resolvers from "./resolvers";
import client from "../../utils/client";

export default {
  namespace: "Akeneo.Categories",
  context: { Category: CategoryLoader(client) },
  typeDefs,
  resolvers
};
