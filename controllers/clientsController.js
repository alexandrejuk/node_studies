const clients = require('../models/clients');

exports.list = function(req, resp, next) {
    clients.find().then(foundClients => {

        resp.status(200)
        .json(foundClients);

    })
}