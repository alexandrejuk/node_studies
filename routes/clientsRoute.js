const router = require('express').Router();
const clientController = require("./../controllers/clientsController");


router.get("/clients", clientController.list);

module.exports = router;