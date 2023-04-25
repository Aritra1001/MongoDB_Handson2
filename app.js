const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Route/route');
const app = express();

app.use(bodyParser.json());
app.use(router);

app.get('/', (req, res)=>{
    res.send({message:"Hello from app.js"});
})


app.listen(5080, ()=>{
    console.log("Our server is running on port 5080");
})