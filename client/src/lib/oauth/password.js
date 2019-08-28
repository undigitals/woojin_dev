import storeToken from "./storeToken";
import { LOGIN_MUTATION } from "../gql/user";

export default (apolloClient, { email, password }) =>
  apolloClient
    .mutate({
      mutation: LOGIN_MUTATION,
      variables: { email, password }
    })
    .then(({ data }) => {
      if (data && data.login) {
        storeToken(apolloClient, data.login, false);
      } else {
        throw new Error("Invalid email or password.");
      }
    });
