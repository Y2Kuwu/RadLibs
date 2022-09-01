const express = require('express');
const router = express.Router();
const passport = require('passport');  //requiring module

router.get('/', function(req, res, next) {
  res.redirect('/characters');
});


//google login
router.get('/auth/google', passport.authenticate(

  'google',  ///requiring strategy
  {scope: ['profile', 'email']}   //requirements from google aka scope
))

//google callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
successRedirect: '/characters',    //redirect to home if authenticated 
failureRedirect: '/characters'

  }
))//google log out
router.get('/logout', function (req,res){
  req.logOut();
  res.redirect('/characters')
})

module.exports = router;

