// import Router from 'next/router';
// import axios from 'axios';
// import { AUTHENTICATE, DEAUTHENTICATE, USER } from '../types';
// import { API } from '../../utils/config';
// import { setCookie, removeCookie } from '../../utils/cookie';

// // register user
// // const register = ({ name, email, password }, type) => {
// //   if (type !== 'register') {
// //     throw new Error('Wrong API call!');
// //   }
// //   return (dispatch) => {
// //     axios.post(`${API}/${type}/`, {name, email, password })
// //       .then((response) => {
// //         Router.push('/');
// //         console.log(response.data.meta.message);
// //       })
// //       .catch((err) => {
// //         switch (error.response.status) {
// //           case 422:
// //           alert(error.response.data.meta.message);
// //             break;
// //           case 401:
// //           alert(error.response.data.meta.message);
// //             break;
// //           case 500:
// //           alert('Interval server error! Try again!');
// //             break;
// //           default:
// //           alert(error.response.data.meta.message);
// //             break;
// //         }
// //       });
// //   };
// // };
// // gets token from the api and stores it in the redux store and in cookie
// const authenticate = ({ email, password }, type) => {
//   if (type !== 'authenticate') {
//     throw new Error('Wrong API call!');
//   }
//   return (dispatch) => {
//     console.log(email)
//     axios.post(`${API}/${type}`, { email, password })
//       .then((response) => {
//         console.log(response.data.data.user.token);
//         // setCookie('token', response.data.data.user.token);
//         Router.push('/');
//         dispatch({type: AUTHENTICATE});
//         localStorage.setItem('user', response.data.data.user.token);
//       })
//       .catch((err) => {
//         console.log(err);
//         switch (error.response.status) {
//           case 422:
//           alert(error.response.data.meta.message);
//             break;
//           case 401:
//           alert(error.response.data.meta.message);
//             break;
//           case 500:
//           alert('Interval server error! Try again!');
//             break;
//           default:
//           alert(error.response.data.meta.message);
//             break;
//         }

//       });
//   };
// };

// // gets the token from the cookie and saves it in the store
// // const reauthenticate = (token) => {
// //   return (dispatch) => {
// //     dispatch({type: AUTHENTICATE, payload: token});
// //   };
// // };

// // // removing the token
// // const deauthenticate = () => {
// //   return (dispatch) => {
// //     removeCookie('token');
// //     Router.push('/');
// //     dispatch({type: DEAUTHENTICATE});
// //   };
// // };

// // const getUser = ({ token }, type) => {
// //   console.log(token)
// //   return (dispatch) => {
// //     axios.get(`${API}/${type}`,{headers: {
// //       "Authorization" : "bearer " + token
// //     }
// //   })
// //       .then((response) => {
// //         dispatch({ type: USER, payload: response.data.data.user });
// //       })
// //       .catch((error) => {
// //         switch (error.response.status) {
// //           case 401:
// //             Router.push('/');
// //             break;
// //           case 422:
// //             alert(error.response.data.meta.message);
// //             break;
// //           case 500:
// //           alert('Interval server error! Try again!');
// //           case 503:
// //           alert(error.response.data.meta.message);
// //           Router.push('/');
// //             break;
// //           default:
// //           alert(error.response.data.meta.message);
// //             break;
// //         }
// //       });
// //   };
// // };


// export default {
//   authenticate,
// };


import axios from 'axios'
import setAuthToken from "../../utils/setAuthToken"
import jwt_decode from 'jwt-decode'
import Router from 'next/router';
import {API} from '../../utils/config'
import {GET_ERRORS, SET_CURRENT_USER} from '../types'

// Register User
export const registerUser = (userData) => dispatch => {
  axios
    .post(`${API}/api/users/register`, userData)
    .then(res =>  Router.push('/signin'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post(`${API}/api/users/login`, userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      console.log('token', token);
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.res.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};


