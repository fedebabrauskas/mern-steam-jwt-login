# MERN Steam Login JWT

This is an example of Steam Authentication using JWT and MERN Stack (MongoDB, Express, React and Node.js).

# How to run

- Clone the repository using
  `git clone https://github.com/fedebabrauskas/mern-steam-login-jwt`
- Run `npm install` in both `api` and `client` folders.
- Rename `.env.example` and replace with your own data in both `api` and `client` folders.
- Run `npm start` in both `api` and `client` folders.

## Behaviour

- Steam Authentication is done by `passport` and `passport-steam` libraries.
- The React client open `/auth/steam` route in a pop-up window.
- After successfully authenticated, the callback route `/auth/steam/return` renders an HTML page with a Javascript script.
- This script makes a `postMessage` to the `window.opener` (React client) and sends the token in the message.
- React client has an event listener waiting for this message event, and when the event fires, it saves the data from the message in localStorage.
