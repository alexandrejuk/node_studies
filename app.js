const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3003;
const clientRoute = require('./routes/clientsRoute');

app.use(bodyParser.json());
app.use("/api", clientRoute);




app.listen(port, ()=>{
    console.log(`Application it is in ${port}`);
});

module.exports = app;