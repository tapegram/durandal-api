var express =           require('express');
var path =              require('path');
var favicon =           require('serve-favicon');
var logger =            require('morgan');
var cookieParser =      require('cookie-parser');
var bodyParser =        require('body-parser');
var mongoose =          require('mongoose');
var config =            require('./config');

/*
===============================================================================
                                Routes
===============================================================================
*/
var fencerPoolResultInfoRouter =  require('./routes/fencerPoolResultInfoRouter');
var fencerRouter =                require('./routes/fencerRouter');
var poolBoutRouter =              require('./routes/poolBoutRouter');
var poolRouter =                  require('./routes/poolRouter');
var tournamentRouter =            require('./routes/tournamentRouter');



/*
===============================================================================
                                DB Setup
===============================================================================
*/
mongoose.connect(config.mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
});

/*
===============================================================================
                                Middleware
===============================================================================
*/
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
===============================================================================
                                Mount Routes
===============================================================================
*/
// API
app.use('/API/v1.0/fencers',                 fencerRouter);
app.use('/API/v1.0/tournaments',             tournamentRouter);
app.use('/API/v1.0/pools',                   poolRouter);
app.use('/API/v1.0/pool_bouts',              poolBoutRouter);
app.use('/API/v1.0/fencer_pool_result_info', fencerPoolResultInfoRouter);

/*
===============================================================================
                          404 and error handling
===============================================================================
*/
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
