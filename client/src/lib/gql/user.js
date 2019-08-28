import gql from "graphql-tag";

// MUTATIONS
export const SIGN_UP_MUTATION = gql`
  mutation signUpWithPassword(
    $email: String!
    $password: String!
    $name: String!
    $phoneNumber: String!
  ) {
    signUpWithPassword(
      email: $email
      password: $password
      name: $name
      phoneNumber: $phoneNumber
    )
  }
`;

export const CHECK_EMAIL_MUTATION = gql`
  mutation checkEmail($email: String!) {
    checkEmail(email: $email)
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

// QUERIES

export const GET_USER_QUERY = gql`
  query getUser {
    getUser {
      name
      gender
      createAt
      updateAt
      phoneNumber
      email
      emailVerifiedAt
      facebookConnectedAt
      googleConnectedAt
    }
  }
`;

export const FACEBOOK_LOGGING = gql`
mutation facebookLogging($email: String!, $id: String!, $name: String!, $picture: String!){
  facebookLogging(
    email: $email,
    id: $id,
    name: $name,
    picture: $picture
  )
}
`

export const GOOGLE_LOGGING = gql`
mutation googleLogging($email: String!, $id: String!, $name: String!, $picture: String!){
  googleLogging(
    email: $email,
    id: $id,
    name: $name,
    picture: $picture
  )
}
`
export const MODIFY_USER_EMAIL = gql`
mutation modifyUserEmail($new_email: String!){
  modifyUserEmail(new_email: $new_email)
}
`
export const MODIFY_USER_PHONE = gql`
mutation modifyUserPhone($new_phone: String!){
  modifyUserPhone(new_phone: $new_phone)
}
`
export const MODIFY_USER_PASSWORD = gql`
mutation modifyUserPassword($old_password:String!, $new_password: String!){
  modifyUserPassword(old_password: $old_password, new_password: $new_password)
}
`