const router = require('express').Router();
const clientController = require("./../controllers/clientsController");


router.get("/clients", clientController.getAllClients);
router.get("/clients/:id", clientController.getOneClient);
router.delete("/clients/:id", clientController.deleteOneClient);



module.exports = router;