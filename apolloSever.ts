import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://test-api.sytbuilder.com/graphql",
  cache: new InMemoryCache(),
});
