import cookie from 'cookie';
import redirect from '../redirect';

export default (client) => {

  // Reset the token in cookie
  document.cookie = cookie.serialize('token', '', {
    path: '/',
    maxAge: -1 // Expire the cookie immediately
  })

  document.cookie = cookie.serialize('access_token', '', {
    path: '/',
    maxAge: -1 // Expire the cookie immediately
  })

  // Force a reload of all the current queries now that the user is
  // logged in, so we don't accidentally leave any state around.
  client.cache.reset().then(() => {
    // Redirect to a more useful page when signed out
    redirect({}, '/')
  })
}
