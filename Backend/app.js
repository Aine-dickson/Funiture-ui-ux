const express = require('express')
const app = express()
const multer = require('multer')
const server = require('mongoose')

server.connect('mongodb://127.0.0.1:27017/furnituredb')
.then(() => {
    app.listen(3000)
})
.catch(err => {
    console.log(err.message)
})
