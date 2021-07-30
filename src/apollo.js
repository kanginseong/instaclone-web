import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const TOKEN = "TOKEN";
const DARK_MODE = "DARK_MODE";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  window.location.reload();
};

export const darkModeVar = makeVar(localStorage.getItem(DARK_MODE));

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enable");
  darkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE, "disable");
  darkModeVar(false);
};

// Take the token from localStorage and put it in the header of authorization or whatever header you want to put in.
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

// 'setContext' is responsible for adding several items to all requests on the client.
// Function that sets the context of the request
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN),
    },
  };
});

// Link is how Apollo clients communicate with data sources.
export const client = new ApolloClient({
  Link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
