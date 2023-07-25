const router = require("express").Router();
const utilsController = require("../controllers/utilsController");

router.post("/uploads", utilsController.exportPDF);

module.exports = router;
