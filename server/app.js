const express = require('express');
const dotenv = require('dotenv');
const app = express();
require('./db/conn')
//const User = require('./model/userSchema');

const middleware = (req, res, next) =>{
    console.log('hello middleware');
    next();
}

app.use(express.json());

app.use(require('./router/auth'));

dotenv.config({path:"./config.env"})

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`server is running at port ${PORT}`)

});