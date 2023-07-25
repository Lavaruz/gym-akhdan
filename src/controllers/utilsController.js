let pdf = require("pdf-creator-node");
let fs = require("fs");
const path = require("path");
const response = require("./response");
const { Member } = require("../models");
const { Op } = require("sequelize");

async function exportPDF(req, res) {
  try {
    let { dari_tanggal, sampai_tanggal } = req.body;
    let html = fs.readFileSync("public/file/uploads/members.html", "utf8");
    var options = {
      format: "A3",
      orientation: "portrait",
      border: "10mm",
    };
    const date = new Date();
    let today = date.toLocaleString("id-ID", {
      dateStyle: "full",
    });
    let users = await Member.findAll({
      where: {
        tanggal_daftar: {
          [Op.gte]: dari_tanggal,
          [Op.lte]: sampai_tanggal,
        },
      },
      raw: true,
    });
    users.forEach((e, index) => {
      e.id = index + 1;
      e.tanggal_daftar = new Date(+e.tanggal_daftar).toLocaleString("id-ID", {
        dateStyle: "full",
      });
      e.tanggal_mulai = new Date(+e.tanggal_mulai).toLocaleString("id-ID", {
        dateStyle: "full",
      });
      e.tanggal_berakhir = new Date(+e.tanggal_berakhir).toLocaleString(
        "id-ID",
        {
          dateStyle: "full",
        }
      );
    });
    console.log(users);
    var document = {
      html: html,
      data: {
        users,
        today,
      },
      path: "./output.pdf",
      type: "",
    };
    pdf
      .create(document, options)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    response(500, "server failed to create pdf", { error: error.message }, res);
  }
}

module.exports = {
  exportPDF,
};
