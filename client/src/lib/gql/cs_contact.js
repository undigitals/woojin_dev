import gql from 'graphql-tag'

export const MESSAGE_ADMIN = gql`
    mutation messageAdmin($type: String, $details: String, $contact_num: String, $title: String, $text: String, $sms_enabled: Boolean, $files: [Upload]){
        messageAdmin(type: $type, details: $details, contact_num: $contact_num, title: $title, text: $text, sms_enabled: $sms_enabled, files: $files)
    }
`

export const FETCH_ALL_MESSAGES = gql`
query fetchUserMessages($pageSize: Int, $next: Int){
  fetchUserMessages(pageSize: $pageSize, next: $next){
    hasMore
    next
    messages{
      type
      details
      contact_num
      title
      text
      answer
      sms_enabled
      images
      date_written
    }
  }
}
`