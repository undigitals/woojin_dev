// import { AUTHENTICATE, DEAUTHENTICATE, USER } from '../types';

// const initialState = {
//   token: null,
//   user: null,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case AUTHENTICATE:
//       return Object.assign({}, state, { token: action.payload });
//     case USER:
//       return Object.assign({}, state, { user: action.payload });
//     case DEAUTHENTICATE:
//       return { token: null };
//     default:
//       return state;
//   }
// };


import isEmpty from '../../components/validation/is-empty'
import { SET_CURRENT_USER } from "../types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
