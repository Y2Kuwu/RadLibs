var createError = require('http-errors');
var express = require('express');



var path = require('path');
var cookieParser = require('cookie-parser');

var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');
// const multer = require('multer');
// const GridFSBucket = require('multer-gridfs-storage');

var logger = require('morgan');

require('dotenv').config(); // for .env file
require('./config/database');
require('./config/passport');


var indexRouter = require('./routes/index');
var characterRouter = require('./routes/characters');
//var nameRouter = require('./routes/name');
////var accRouter = require('./routes/acc');



var app = express();






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));

//session logic//
var session = require('express-session');  //maintaining session while user is logged in

app.use(session({
  secret: process.env.SECRET,
  resave: false,      //get away from depreciation warnings
  saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(function (req,res,next){
res.locals.user = req.user;    //local is the object and is being stored
next(); //move to next func
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/characters', characterRouter);
//app.use('/', nameRouter);
//app.use('/', accRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;