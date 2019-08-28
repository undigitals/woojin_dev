import {INCREAMENT,DECREAMENT} from '../actions/index'


export default function incReducer(state = { quantity: 0 }, action){
    switch(action.type){
        case INCREAMENT:
            return  {
				quantity: state.quantity + 1
			}
        case DECREAMENT: 
             return {
				quantity: state.quantity - 1
			}
        default: 
            return state;
    }

}
