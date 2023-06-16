const { User } = require("../models");
const response = require("./response");

async function getAllMember(req, res) {
  try {
    // await User.findAll().then((result) => {
    //   response(200, "success get all data", [], res);
    // });
    response(200, "success get all member data", [], res);
  } catch (error) {
    response(200, "server failed to get data", { error: error.message }, res);
  }
}

module.exports = {
  getAllMember,
};
