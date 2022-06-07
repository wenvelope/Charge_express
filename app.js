var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//跨域访问
app.all("*",(req, res, next) => {
  res.header('Access-Control-Allow-Credentials','true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  next();
})
app.use(cors({
  origin:['http://localhost:8080'],
  methods:['GET','POST'],
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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


// 设置 Mongoose 连接
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/school', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, function (error) {
//     if (error) {
//         console.log("数据库连接失败")
//     } else {
//         console.log("数据库连接成功")
//     }
// })

module.exports = app;
