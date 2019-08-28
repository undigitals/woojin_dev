import gql from 'graphql-tag'

export const FETCH_ROWS = gql`
query fetchRows{
  fetchRows{
    title
    uri
    template
  }
}
`

export const GET_CS_ONE_ROW_ITEMS = gql`
query getCsOneRowItems(
  $pageSize: Int,
  $next: Int,
  $category: String,
  $uri:String
){
  getCsOneRowItems(
    pageSize: $pageSize,
    next: $next,
    category: $category,
    uri: $uri
  ){
    items{
      title
      answer
      date_added
    }
  }
}
`

export const ALL_CATEGORY_FETCH = gql`
query allCateforyFetch($uri: String!){
  allCateforyFetch(uri: $uri)
}
`

export const SEARCH_FROM_ONE_ROW = gql`
query searchFromOneRow($pageSize: Int, $next: Int, $uri: String, $term: String!, $category: String!){
  searchFromOneRow(pageSize: $pageSize, next: $next, uri: $uri, term: $term, category:$category){
    hasMore
    next
    items{
      title
      answer
      date_added
    }
  }
}
`