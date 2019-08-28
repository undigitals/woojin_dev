import gql from 'graphql-tag'

export const GET_ADDRESSBOOK = gql`
query getAddressbook ($pageSize: Int, $next: Int){
  getAddressbook(pageSize: $pageSize, next: $next){
    hasMore
    next
    addresses{
      _id
      address_name
      receiver_name
      contact_number
      zipcode
      primary_address
      street_address
      is_default
    }
  }
}
`

export const INSERT_NEW_ADDRESS = gql`
mutation insertNewAddress(
  $address_name: String!, 
  $receiver_name: String!, 
  $contact_number: String!, 
  $zipcode: String!, 
  $primary_address: String!, 
  $street_address: String!, 
  $is_default:Boolean!
){
  insertNewAddress(
    address_name: $address_name, 
    receiver_name:$receiver_name, 
    contact_number: $contact_number, 
    zipcode: $zipcode, 
    primary_address: $primary_address, 
    street_address: $street_address, 
    is_default: $is_default
  )
}
`

export const DELETE_ADDRESS = gql`
mutation deleteAddress($address_id: String!){
  deleteAddress(address_id: $address_id)
}
`

export const MODIFY_ADDRESS = gql`
mutation modifyAddress(
  $address_id: String!,
  $address_name: String!, 
  $receiver_name: String!, 
  $contact_number: String!, 
  $zipcode: String!, 
  $primary_address: String!, 
  $street_address: String!, 
  $is_default:Boolean!
){
  modifyAddress(
    address_id: $address_id,
    address_name: $address_name, 
    receiver_name:$receiver_name, 
    contact_number: $contact_number, 
    zipcode: $zipcode, 
    primary_address: $primary_address, 
    street_address: $street_address, 
    is_default: $is_default
  )
}
`