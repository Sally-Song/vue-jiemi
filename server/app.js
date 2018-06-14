var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')
// var goodsRouter = require('./routes/goods')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
// app.use('/users', usersRouter)
// app.use('/goods', goodsRouter)

// 全局拦截
/*
app.use((req, res, next) => {
  if (req.cookies.userId) { // 获取客户端的userId，true：已登录，不用拦截
    next()
  } else {
    // 获取用户的原始路径，设置白名单
    console.log(`req.path ===> ${req.path}`)
    console.log(`req.originalUrl ===> ${req.originalUrl}`)
    if (req.originalUrl === '/users/login' || req.originalUrl === '/users/logout' || req.path == '/goods/list') {
      next()
    } else {
      // 全部拦截
      res.json({
        status: '10001',
        msg: '当前用户为登录',
        result: ''
      })
    }
  }
})
*/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
