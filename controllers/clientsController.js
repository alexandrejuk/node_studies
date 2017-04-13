const clients = require('../models/clients');

let Creation = {
    name: 'Alexandre',
    phone: 1234567
}

let createClient = new clients(Creation);
createClient.save();