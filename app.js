const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3003;
const clientRoute = require('./routes/clientsRoute')

app.use("/api", clientRoute);

app.listen(port);
console.log(`Application it is in ${port}`);

module.exports = app;