import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../container/layout";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apolloSever";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
