const express = require('express')
const cors = require('cors')
const app = express()

const path = require('path')
// const hbs = require('express-handlebars')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('./public/js/user')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine','ejs')

const mongo_uri = 'mongodb+srv://superuser:supersuper@profile.wqmfhch.mongodb.net/portafolio?retryWrites=true&w=majority'

mongoose.connect(mongo_uri, function(err){
    if(err) {
        throw err
    } else {
        console.log(`Successfully connected to ${mongo_uri}`)
    }
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/register', (req, res) => {
    const {username, password} = req.body
    const user = new User({username, password})

    user.save(err => {
        if(err){
            res.status(500).send('ERROR TO REGISTER')
        } else {
            res.status(200).send('REGISTERED USER')
        }
    })
})

app.post('/authenticate', (req, res) => {
    const {username, password} = req.body

    User.findOne({username}, (err, user) => {
        if(err){
            res.status(500).send('ERROR TO AUTHENTICATE')
        } else if(!user){
            res.status(500).send('USER DOES NOT EXIST')
        } else {
            user.isCorrectPassword(password, (err, result) => {
                if(err){
                    res.status(500).send('ERROR TO AUTHENTICATE')
                } else if(result){
                    res.status(200).send('USER AUTHENTICATED CORRECTLY')
                } else {
                    res.status(500).send('USER AND/OR PASSWORD INCORRECTLY')
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
