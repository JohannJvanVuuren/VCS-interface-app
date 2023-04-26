/* Require statements for all modules needed in app.js */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const crypto = require('crypto');
const cors = require('cors');



/* Require statements for the individual routes */
const usersRouter = require('./routes/users');
const frontendGitHubRouter = require('./routes/githubInterface');
const frontendGitLabRouter = require('./routes/gitlabInterface');

require('dotenv').config();

/* Creation of an app instance returned by Express  */
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* Enabling of all middleware and external packages */
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

/* Helmet default security settings for the app */
const nonce = crypto.randomUUID();
helmet.contentSecurityPolicy({
  directives: {
    "script-src": [`'nonce-${nonce}'`, 'strict-dynamic'],
    "object-src": 'none',
    "base-uri": 'none',
    "Cross-Origin-Resource-Policy": 'cross-origin',
    "Cross-Origin-Opener-Policy": 'cross-origin',
  }
})

/* Enabling of the routes */
app.use('/users', usersRouter);
app.use('/githubInterface', frontendGitHubRouter);
app.use('/gitlabInterface', frontendGitLabRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
