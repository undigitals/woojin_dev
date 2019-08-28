import cookie from "cookie";
import redirect from "./redirect";

export default (client, token, social_login) => {
  // Store the token in cookie

  document.cookie = cookie.serialize("token", JSON.stringify(token), {
    path: "/",
    maxPeriod: 30 * 24 * 60 * 60 // 30 days
  });

  document.cookie = cookie.serialize("access_token", token, {
    path: "/",
    maxPeriod: 30 * 24 * 60 * 60 // 30 days
  });

  document.cookie = cookie.serialize("social_login", social_login, {
    path: "/",
    maxPeriod: 30 * 24 * 60 * 60 // 30 days
  });

  // Force a reload of all the current queries now that the user is
  // logged in
  client.cache.reset().then(() => {
    redirect({}, "/");
  });
};
