import React from "react";
import "./Login.css";
import Logo from "../Assets/Spotify_Logo_Green.png";
import { loginUrl } from "../Services/spotify";


const Login = () => {
  return (
    <div className="login ">
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      {/* <h1>Login </h1> */}
      <img src={Logo} alt="Spotify Logo" />
      <a href={loginUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
};

export default Login;
