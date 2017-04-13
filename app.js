const port = 3003;
const express = require('express');


const router = require('./controllers/clientsController');

const app = express();



app.listen(port);
console.log(`Application it is in ${port}`);

