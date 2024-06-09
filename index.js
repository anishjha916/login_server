const express = require('express');
const PORT = 3000;

const app = express();
const bodyparser = require('body-parser');
require('./db');
require('./models/User')
const authroutes = require('./routes/authRoutes')
const requiretoken = require('./Middlewares/Authtokenrequire')
app.use(bodyparser.json());
app.use(authroutes);

app.get('/',requiretoken,(req,res) => {
    console.log("sent by home page" +req.user);
    res.send(req.user)
    // console.log(req.body);
})

app.listen(PORT, ()=> {
    console.log("server is running");
})