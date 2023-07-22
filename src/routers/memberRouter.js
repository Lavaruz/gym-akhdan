const router = require("express").Router();
const memberController = require("../controllers/memberController");

router.get("/", memberController.getAllMember);
router.post("/", memberController.addNewMember);
router.put("/", memberController.updateMember);

module.exports = router;
