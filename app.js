const port = 3003;
const express = require('express');
const routeClient = require('./routes/clientsRoute')

const app = express();
app.use('/api', routeClient);

app.listen(port);
console.log(`Application it is in ${port}`);

