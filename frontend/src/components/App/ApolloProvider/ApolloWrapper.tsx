"use client";

import { HttpLink, ApolloLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink
} from "@apollo/experimental-nextjs-app-support";

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.SERVER_API_URL ?? 'http://127.0.0.1:1337/graphql', // 127.0.0.1 - is important
    fetchOptions: { cache: "no-store" },
  });

  const getLink = () => {
    if (typeof window !== 'undefined') {
      return httpLink;
    }

    return ApolloLink.from([
      new SSRMultipartLink({
        stripDefer: true,
      }),
      httpLink,
    ]);
  };
  
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: getLink(), // getLink()
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}