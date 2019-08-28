import gql from 'graphql-tag'

export const FETCH_ORDERS_BY_DATE = gql`
query fetchOrdersByDate ($from: String, $to: String){
  fetchOrdersByDate(from: $from, to: $to){
    _id,
    date_ordered,
    order_number,
    order_title,
    order_info,
    deli_type,
    deli_date,
    order_count,
    order_cost,
    deli_status,
    person_in_charge,
    paper_type,
    files
  }
}
`

export const FETCH_CANCELLED_ORDERS_BY_DATE = gql`
query fetchCancelledOrdersByDate ($from: String, $to: String){
  fetchCancelledOrdersByDate(from: $from, to: $to){
    _id,
    date_ordered,
    order_number,
    order_title,
    order_info,
    deli_type,
    deli_date,
    order_count,
    order_cost,
    deli_status,
    person_in_charge,
    paper_type,
    files
  }
}
`