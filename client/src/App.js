import React, { useEffect } from "react";
import "./App.css";

export const App = () => {
  const handleLogin = () => {
    const popupWindow = window.open(
      process.env.REACT_APP_API_URL + "/auth/steam",
      "_blank",
      "width=800, height=600",
    );
    if (window.focus) popupWindow.focus();
  };

  useEffect(() => {
    window.addEventListener("message", event => {
      if (event.origin !== process.env.REACT_APP_API_URL) return;

      const { token, ok } = event.data;
      if (ok) {
        localStorage.setItem("jwtToken", token);
        console.log(token);
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Steam JWT Login</h1>
      <img
        onClick={handleLogin}
        src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png"
        alt="Login with Steam"
      />
    </div>
  );
};
