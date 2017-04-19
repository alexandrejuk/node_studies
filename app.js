const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3003;
const clientRoute = require('./routes/clientsRoute');




app.use(bodyParser.json());
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 
app.get("/", (req, res) => res.json({message: "Welcome to our clients!"}))
app.use("/api", clientRoute);

app.listen(port, ()=>{
    console.log(`Application it is in ${port}`);
});

module.exports = app;