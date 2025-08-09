// app.js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');

var indexRouter = require('./app_server/routes/index');
var travelRouter = require('./app_server/routes/travel');
var roomsRouter = require('./app_server/routes/rooms');
var mealsRouter = require('./app_server/routes/meals');
var newsRouter = require('./app_server/routes/news');
var aboutRouter = require('./app_server/routes/about');
var contactRouter = require('./app_server/routes/contact');

var app = express();

// views/partials
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.set('view options', {
  layout: 'layouts/layout.hbs'});

// helpers
hbs.registerHelper('eq', (a, b) => a === b);

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  // static assets (CSS, images, client JS)
  app.use(express.static(path.join(__dirname, 'public')));

  // routes
  app.use('/', indexRouter);
  app.use('/travel', travelRouter);
  app.use('/rooms', roomsRouter);
  app.use('/meals', mealsRouter);
  app.use('/news', newsRouter);
  app.use('/about', aboutRouter);
  app.use('/contact', contactRouter);

  // 404
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });

  module.exports = app;
