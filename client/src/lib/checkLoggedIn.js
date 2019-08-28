import { GET_USER_QUERY } from './gql/user';

export default apolloClient =>
  apolloClient
    .query({ query: GET_USER_QUERY })
    .then(({ data }) => {
      if (data && data.getUser && data.getUser.email) {
        return { loggedInUser: data.getUser }
      } else {
        return { loggedInUser: null }
      }
    })
    .catch((error) => {
      // Fail gracefully
      return { loggedInUser: null }
    })