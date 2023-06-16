const router = require("express").Router();
const memberController = require("../controllers/memberController");

router.get("/", memberController.getAllMember);

module.exports = router;
