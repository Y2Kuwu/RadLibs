const express = require('express');
const router = express.Router();
const passport = require('passport');  //requiring module

router.get('/', function(req, res, next) {
  res.redirect('/movies');
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
successRedirect: '/movies',    //redirect to home if authenticated 
failureRedirect: '/movies'

  }
))//google log out
router.get('/logout', function (req,res){
  req.logOut();
  res.redirect('/movies')
})

module.exports = router;

