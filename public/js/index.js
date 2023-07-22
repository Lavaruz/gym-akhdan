$(document).ready(function () {
  $("#member-table").DataTable({
    ajax: {
      url: "https://muslim-maya-production.up.railway.app/api/scores/",
      dataSrc: "payload.datas",
    },
    columns: [
      {
        data: null,
        render: function (data, type, row, meta) {
          return meta.row + meta.settings._iDisplayStart + 1;
        },
      },
      { data: "nis" },
      { data: "username" },
      { data: "class" },
    ],
  });
});
