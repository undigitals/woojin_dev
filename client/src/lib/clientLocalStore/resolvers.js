import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }

  extend type Book {
    title: String,
    count: String,
    size: BookSize,
    output_direction: String,
    binding: String,
    paper_type: String,
    thickness: Int,
    volume_section: String,
    color: String,
    coating: String,
    post_processing: String,
    book_wing_size: Int,
  }
  extend type BookSize {
    width: Int,
    height: Int
  }

#   extend type Mutation {
#     addOrRemoveFromCart(id: ID!): [Launch]
#   }
`;

export const resolvers = {};