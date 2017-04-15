const clients = require('../models/clients');


let creationClient = new clients ({
    name: "Alexandre dos Santos Soares",
    phone: 98765421
});
creationClient.save(function(){
    console.log(creationClient)
})


exports.getAllClients = function(req, resp, next) {
    clients.find().then(foundClients => {

        resp.status(200)
        .json(foundClients);

    })
}

exports.getOneClient = function(req, resp, next) {
    console.log(req.params.id);
    clients.findById(req.params.id).then(foundOneClients => {

        resp.status(200)
        .json(foundOneClients);

    })
}

exports.deleteOneClient = function(req, resp, next) {
    console.log(req.params.id);
    clients.remove({_id: req.params.id}).then(deleteOneClients => {

        resp.status(200)
        .json({message: 'Client was removed!', deleteOneClient});

    })
}
