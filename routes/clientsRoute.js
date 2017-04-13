const router = require('express').Router();
const clientController = require("./../controllers/clientsController");

router.get("/clients", clientController.createClients);

module.exports = router;