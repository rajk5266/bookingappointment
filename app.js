const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database.js')
const User = require('./models/user.js');
var cors = require('cors');
const app = express()


const formroute = require('./routes/main.js')
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}));

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', formroute)

sequelize
 .sync( )
 .then(result => {
    console.log('database connected')
    app.listen(500) 
     })
 .catch(err => console.log(err))