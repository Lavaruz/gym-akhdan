const { Member } = require("../models");
const response = require("./response");

async function getAllMember(req, res) {
  try {
    await Member.findAll().then((result) => {
      response(200, "success get all data", result, res);
    });
  } catch (error) {
    response(200, "server failed to get data", { error: error }, res);
    console.log(error);
  }
}

async function addNewMember(req, res) {
  try {
    let { nama, tanggal_berakhir, tanggal_daftar, tanggal_mulai } = req.body;
    console.log(req.body);
    await Member.create({
      nama,
      tanggal_berakhir,
      tanggal_mulai,
      tanggal_daftar,
    }).then(() => {
      response(201, "success create new member", req.body, res);
    });
  } catch (error) {
    response(
      400,
      "Server failed to create new member",
      { error: error.message },
      res
    );
    console.log(error);
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

async function deleteMember(req, res) {
  try {
    let checkedMember = req.body.checkedMember;
    if (!checkedMember) return response(400, "body cant be undefined", [], res);
    await Member.destroy({
      where: {
        id: checkedMember,
      },
    }).then((respon) => {
      if (!respon)
        return response(400, "delete failed, user not found", respon, res);
      return response(200, "success delete user", respon, res);
    });
  } catch (error) {
    response(
      500,
      "server failed to delete user",
      { error: error.message },
      res
    );
  }
}
module.exports = {
  getAllMember,
  addNewMember,
  updateMember,
  deleteMember,
};
