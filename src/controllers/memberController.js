const { Member } = require("../models");
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

async function addNewMember(req, res) {
  try {
    response(201, "success create new member", [], res);
  } catch (error) {
    response(
      400,
      "server failed to create new member",
      { error: error.message },
      res
    );
  }
}

async function updateMember(req, res) {
  try {
    response(200, "success update member", [], res);
  } catch (error) {
    response(
      400,
      "server failed to update member",
      { error: error.message },
      res
    );
  }
}

module.exports = {
  getAllMember,
  addNewMember,
  updateMember,
};
