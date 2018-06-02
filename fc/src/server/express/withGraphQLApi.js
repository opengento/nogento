import express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import fetch from "node-fetch";

export default async modules => {
  const router = express.Router();
  router.use(bodyParser.json());
  router.use("/graphql", graphqlExpress(req => GraphQLOptions));
  router.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
  return router;
};
