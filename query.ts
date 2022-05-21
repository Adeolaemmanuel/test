import gql from "graphql-tag";

export const SIGN_UP = gql`
  mutation signUp(
    $fn: String!
    $ln: String!
    $email: String!
    $password: String!
  ) {
    signup(
      first_name: $fn
      last_name: $ln
      email: $email
      password: $password
    ) {
      user {
        _id
        uuid
        first_name
        last_name
        email
        email_verified_at
        email_verification_token
        created_at
      }
      token
    }
  }
`;

export const LOGIN = gql`
  mutation login($password: String!, $email: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        uuid
        first_name
        last_name
        email
        email_verified_at
        email_verification_token
      }
      token
    }
  }
`;
