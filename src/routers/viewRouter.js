const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/member", (req, res) => {
  res.render("memberPage");
});

module.exports = router;
