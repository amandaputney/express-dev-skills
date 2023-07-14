var createError = require('http-errors');
var express = require('express');
var path = require('path');

//middleware
var cookieParser = require('cookie-parser');
//logging requests as they come in to our server
var logger = require('morgan');

//router modules
var indexRouter = require('./routes/index');
var skillsRouter = require('./routes/skills');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//middleware mounted (plugged in) into the request pipeline 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mounting router middlware... routers are middleware functions
//starting paths, and then the paths used in routes appended
app.use('/', indexRouter);
app.use('/todos', skillsRouterRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
