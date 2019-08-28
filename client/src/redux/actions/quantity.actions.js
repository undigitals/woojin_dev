export const INCREAMENT = ' updateCount'
export const DECREAMENT = ' decCount'

export function updateCount(c) {
    return{
        type: INCREAMENT,
        payload: {
            quantity:  c
        } 
    }
  } 

export function decCount(c){
    return{
        type: DECREAMENT,
        payload: {
            quantity: c
        }
    }
}
