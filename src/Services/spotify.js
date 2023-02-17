// endpoint - which page should i send the user too.

export const authenticationEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "5ec0dff463cc43dea276ca995cca6240";

/* scopes - We throw the user to spotify, and include bunch of scopes, define the page endpoints
  - the screen which we are gonna show to the user will have the scopes listed out
  - adding scope is in a way giving user to perform crud operations for the specified API
  - gets permissions to performs commands like play, get information from user account
 */

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-follow-modify",
  "streaming",
  "ugc-image-upload",
];

// token - it is a string which represents your authentication basically a pass for authenticating

// Writing a function for getting the token from the URL
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // accesssToken = secretToken
      let parts = item.split("=");
      // accesToken     =    secretToken
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authenticationEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
