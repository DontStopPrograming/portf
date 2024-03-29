const express = require('express')
// const cors = require('cors')

const app = express()

// const mysql = require('mysql')

const path = require('path')
// const hbs = require('express-handlebars')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('./public/js/user')
const { send } = require('process')
const user = require('./public/js/user')

// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.set('views', __dirname + '/views' )
app.use('/public', express.static('public'))
// app.use(express.static(__dirname + '/public/'))

// if(process.env.NODE_ENV !== 'production') {}
    require('dotenv').config()

mongoose.set('strictQuery', true)

 mongoose
     .connect(process.env.MONGODB_URI)
     .then(() => console.log('CONECTED TO MONGODB'))
     .catch((error) => console.error(error))

// mongoose.connect(MONGODB_URI, function(err){
//     if(err) {
//         throw err
//     } else {
//         console.log(`Successfully connected to ${MONGODB_URI}`)
//     }
// })

app.get('/', (req, res, next) => {
    res.render('index')
    next()
})

 app.get('/signup', (req, res, next) => {
     res.render('signup')
     next()
 })

 app.get('/resume', (req, res, next) => {
    app.render('resume')
    next()
 })
 
    app.get('/registererror', (req, res, next) => {
     res.render('registererror')
     next()
    })
    
    app.get('/registeruser', (req, res, next) => {
        res.render('registeruser')
        next()
    })
    
app.get('/register', (req, res, next) => {
       res.render('register')
       next()
    })

app.post('/register', (req, res) => {
    const {username, password} = req.body
    const user = new User({username, password})
    user.save(err => {
        if(err){
        //  res.status(500).send('ERROR TO REGISTER')
            return res.render('registererror')
            
           
        } else {
        //  res.status(200).send('REGISTERED USER')
            return res.render('registeruser')
            
        }
    })
})

app.get('/authenticateerror', (req, res, next) => {
    res.render('authenticateerror')
    next()
})

app.get('/usernotexist', (req, res, next) => {
    res.render('usernotexist')
    next()
})

app.get('/authenticatecorrectly', (req, res, next) => {
    res.render('authenticatecorrectly')
    
    next()
})

app.get('/authenticateuserpasswordfalse', (req, res, next) => {
    res.render('authenticateuserpasswordfalse')
    next()
})

app.get('/authenticate', (req, res, next) => {
    res.render('authenticate')
    next()
})

app.post('/authenticate', (req, res) => {
    const {username, password} = req.body

    User.findOne({username}, (err, user) => {
        if(err){
            // res.status(500).send('ERROR TO AUTHENTICATE')
            res.render('authenticateerror')
        } else if(!user){
            // res.status(500).send('USER DOES NOT EXIST')
            res.render('usernotexist')
        } else {
            user.isCorrectPassword(password, (err, result) => {
                if(err){
                    // res.status(500).send('ERROR TO AUTHENTICATE')
                    res.render('authenticateerror')
                } else if(result){
                    // res.status(200).send('USER AUTHENTICATED CORRECTLY')
                    res.render('authenticatecorrectly')
                } else {
                    // res.status(500).send('USER AND/OR PASSWORD INCORRECTLY')
                    res.render('authenticateuserpasswordfalse')
                }
            })
        }
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server started')
})

module.exports = app
