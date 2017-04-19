const mongoose = require('mongoose');
const Clients = require('../models/clients');


function getAllClients(req, res, next) {
    let query = Clients.find({});
    query.exec((err, clients) =>{
        if(err) res.send(err);

        res.json(clients);
    });
}

function postClient(req, res, next) {
    const newClient = new Clients(req.body);
    newClient.save((err, client) =>{
        if(err){
            res.send(err);
        }else {
            res.json({
                message: "Client successfully added!", client
            });
        }
    });
}

function getClientId (req, res, next) {
    Clients.findById(req.params.id, (err, client) =>{
        if(err) res.send(err);

        res.json(client);
    });
}

function deleteClient(req, res) {
    Clients.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "Client successfully deleted!", result });
    });
}

function updateClient(req, res) {
    Clients.findById({_id: req.params.id}, (err, client) => {
        if(err) res.send(err);
        Object.assign(client, req.body).save((err, client) => {
            if(err) res.send(err);
            res.json({ message: 'Client updated!', client });
        }); 
    });
}

module.exports = { getAllClients, postClient, getClientId, deleteClient, updateClient};