const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
// const mainRoutes = require('./routes/main')
// const todoRoutes = require('./routes/todos')
const indexRouter = require('./routes/index')
const indexRouter = require('./routes/menu')
const indexRouter = require('./routes/login')


require('dotenv').config({path: './config/.env'})

// Passport config
// require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

app.use(flash())

// add routes here - ones w'ell create
app.use('/'. indexRouter)
app.use('/menu', menuRouter)
app.use('/login', loginRouter)

 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, catch me if you can ;D')
})   