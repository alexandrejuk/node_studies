const clients = require('../models/clients');


let creationClient = new clients ({
    name: "Alexandre dos Santos Soares",
    phone: 98765421
});
creationClient.save(function(){
    console.log(creationClient)
})


exports.getAllClients = (req, res, next) =>{
    clients.find().then(foundClients => {
        res.status(200).json(foundClients);
    }).catch((err) =>{
       res.status(500).json({
           message: err,
       });
   });
 }

exports.getOneClient = (req, res, next) => {
    console.log(req.params.id);
    clients.findById(req.params.id).then(foundOneClients => {
        res.status(200).json(foundOneClients);
    }).catch((err) =>{
       res.status(500).json({
           message: err,
       });
   });
 }

exports.deleteOneClient =  (req, res, next) =>{
    console.log(req.params.id);
    clients.remove({_id: req.params.id}).then(deleteOneClients => {
        resp.status(200).json({
            message: 'Client was removed!', deleteOneClients
        });
    }).catch((err) =>{
       res.status(500).json({
           message: err,
       });
   });
 }


exports.postClients = (req, res, next) => {
    console.log(req.body);
}

exports.postClients = (req, res, next) => {
    console.log(req.body);
   const clientModel = new clients(req.body);
   clientModel.save().then((newClient) =>{
       res.status(200).json({
           success: true,
           data: newClient,
           message: 'Customer successfully added '
       });
   }).catch((err) =>{
       res.status(500).json({
           message: err,
       });
   });
 }

exports.putOnClient = (req, res, next) =>{
    console.log(req.body);
    clients.findByIdAndUpdate(req.params.id, req.body).then(putClient =>{
        res.status(200).json({    success: true,
           data: putClient,
           message:'Customer successfully change '
       });
    }).catch((err) =>{
       res.status(500).json({
           message: err,
       });
   });
 }