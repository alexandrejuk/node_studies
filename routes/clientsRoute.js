const route = require('express').Router();
const clientController = require("./../controllers/clientsController");


route.get("/clients", clientController.getAllClients);
route.get("/clients/:id", clientController.getClientId);
route.delete("/clients/:id", clientController.deleteClient);
route.post("/clients", clientController.postClient);
route.put("/clients/:id", clientController.updateClient);


module.exports = route;