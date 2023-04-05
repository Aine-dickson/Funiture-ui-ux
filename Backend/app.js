const express = require('express')
const app = express()
const multer = require('multer')
const parser = require('body-parser')
const cors = require('cors')
const server = require('mongoose')

app.use(cors())

const userSchema = server.Schema({
    name: String,
    email: String,
    password: String
})

const User = server.model("User", userSchema)

server.connect('mongodb://127.0.0.1:27017/furniture_store')
.then(() => {
    app.listen(2000, () => {
        console.log("Listening to port 2000")
    })
})
.catch(err => {
    console.log("Error" + err.message)
})


app.post('/login-data', parser.json(), (req, res) => {
    console.log("Request made")
    let name = req.body.userName
    let email = req.body.email
    let password = req.body.password
    const user = new User({
        name: name,
        email: email,
        password: password
    })
    user.save()
    .then((userObject) => {
        res.json(userObject)
    })
    .catch(err => {
        console.log(err.message)
    })
    // res.redirect('/home')
})
