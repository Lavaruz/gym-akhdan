const { Member } = require("../models");
const response = require("./response");

async function getAllMember(req, res) {
  try {
    await Member.findAll().then((result) => {
      response(200, "success get all data", result, res);
    });
  } catch (error) {
    response(200, "server failed to get data", { error: error.message }, res);
  }
}

async function addNewMember(req, res) {
  try {
    let { nama, tanggal_berakhir, tanggal_daftar } = req.body;
    await Member.create({
      nama,
      tanggal_berakhir,
      tanggal_daftar,
    }).then(() => {
      response(201, "success create new member", req.body, res);
    });
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
