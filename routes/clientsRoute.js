const router = require('express').Router();
const clientController = require("./../controllers/clientsController");


router.get("/clients", clientController.getAllClients);
router.get("/clients/:id", clientController.getOneClient);
router.delete("/clients/:id", clientController.deleteOneClient);
router.post("/clients", clientController.postClients);
router.put("/clients/:id", clientController.putOnClient);


module.exports = router;