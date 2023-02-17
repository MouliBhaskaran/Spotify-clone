import React from 'react';
import { useEffect } from "react";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./Services/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useStateProviderValue } from "./StateManagement/StateProvider";

// spotify instance- this is gonna be a object rthat we constantly refer to and is basically going to be responsible
//          for any sort of interaction between our reactapp and spotify
const spotify = new SpotifyWebApi(); // creating a instance of SpotifyWebApi

function App() {
  const [{token }, dispatch] = useStateProviderValue();

  //useEffect - Runs code based on given conditions/sideeffects
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    // creating a temporary token with _name (standard company convention)
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token); // sets the accesstoken to the spotify instance
      console.log("🟢", _token)
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //testing the api
      spotify.getMe().then((user) => {
        console.log("🟠" , user)
        dispatch({
          type: "SET_USER",
          user: user,
        }); // dipatching an action, basically passing the data to StateProvider
      }); // gets the users acc and the response is in the form of a promise (async)

      // Working on getting data from Spotify to show playlists
      spotify.getUserPlaylists().then((playlists) => {
        console.log("🔵",playlists)
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcIEuyVNqKcbe").then((response) => {
        console.log("🟡",response)
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }

    
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
