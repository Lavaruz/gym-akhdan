const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/admin/dashboard", (req, res) => {
  res.render("adminDashboard");
});
router.get("/admin/members", (req, res) => {
  res.render("adminMembers");
});
router.get("/admin/members/tambah", (req, res) => {
  res.render("adminMembersTambah");
});
router.get("/admin/login", (req, res) => {
  res.render("adminLogin");
});

module.exports = router;
