import typeDefs from "./schema.gql";
import { CategoryLoader } from "./loader";
import resolvers from "./resolvers";
import makeAxiosInstance from "../../utils/makeAxiosInstance";

export default {
  namespace: "Akeneo.Categories",
  context: { Category: CategoryLoader(makeAxiosInstance()) },
  typeDefs,
  resolvers
};
