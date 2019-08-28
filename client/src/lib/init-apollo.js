import { InMemoryCache } from "apollo-cache-inmemory";
import {ApolloClient} from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context'
import fetch from "isomorphic-unfetch";
import getConfig from 'next/config'
import {typeDefs, resolvers} from './clientLocalStore/resolvers'
const { publicRuntimeConfig } = getConfig();

const isClient = typeof document !== 'undefined';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState, { getToken, getUserAgent }) {
  const httpLink = createUploadLink({
    uri: isClient ? `${window.location.protocol}//${window.location.hostname}/restauth/` : 'http://restauth.internal/restauth/',
    // uri: "http://localhost:4001/graphql",
    credentials: 'same-origin'
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    const userAgent = getUserAgent ? getUserAgent() : undefined;

    const result = {
      headers: {
        ...headers,
        authorization: token ? `${token}` : ''
      }
    }

    if (userAgent) result.headers['user-agent'] = userAgent;

    return result;
  })

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
    typeDefs,
    resolvers,
  })
}


export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
