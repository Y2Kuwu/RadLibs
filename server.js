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

var imgModel = require('./models/img');

require('dotenv').config(); // for .env file
require('./config/database');
require('./config/passport');

//
// var multer = require('multer');
//   //multer already installed use below
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
 
  //multer
// var upload = multer({ storage: storage });
  //

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

//multer get
// app.get('/', (req, res) => {
//   imgModel.find({}, (err, items) => {
//       if (err) {
//           console.log(err);
//           res.status(500).send('An error occurred', err);
//       }
//       else {
//           res.render('imagesPage', { items: items });
//       }
//   });
// });
//
//
// app.post('/', upload.single('image'), (req, res, next) => {
  
//   var obj = {
//       name: req.body.name,
//       desc: req.body.desc,
//       img: {
//           data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//           contentType: 'image/png'
//       }
//   }
//   imgModel.create(obj, (err, item) => {
//       if (err) {
//           console.log(err);
//       }
//       else {
//           // item.save();
//           res.redirect('/');
//       }
//   });
// });
//
//



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