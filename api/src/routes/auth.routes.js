const passport = require('passport');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.get('/steam', passport.authenticate('steam', { session: false }));

router.get('/steam/return', passport.authenticate('steam', { session: false }), (req, res) => {
  const token = jwt.sign({ user: req.user }, process.env.SECRET_KEY, { expiresIn: '2h' });
  res.render('authenticated', { jwtToken: token, clientUrl: process.env.FRONTEND_URL });
});

module.exports = router;
