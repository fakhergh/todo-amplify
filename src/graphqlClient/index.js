import { GraphQLClient } from "graphql-request";

import { GRAPHQL_API_KEY, GRAPHQL_END_POINT } from "../constants";

const graphqlClient = new GraphQLClient(GRAPHQL_END_POINT);

graphqlClient.setHeader("x-api-key", GRAPHQL_API_KEY);

export default graphqlClient;
