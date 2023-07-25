const router = require("express").Router();

router.get("/dashboard", (req, res) => {
  res.render("adminDashboard");
});
router.get("/members", (req, res) => {
  res.render("adminMembers");
});
router.get("/members/tambah", (req, res) => {
  res.render("adminMembersTambah");
});
router.get("/laporan", (req, res) => {
  res.render("adminLaporan");
});
router.get("/login", (req, res) => {
  res.render("adminLogin");
});

module.exports = router;
