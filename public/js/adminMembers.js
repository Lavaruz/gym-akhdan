$(document).ready(function () {
  $("#select-all").on("click", function () {
    if (this.checked) {
      // Iterate each checkbox
      $(".hapus-button").attr("disabled", false);
      $(":checkbox").each(function () {
        this.checked = true;
      });
    } else {
      $(".hapus-button").attr("disabled", true);
      $(":checkbox").each(function () {
        this.checked = false;
      });
    }
  });

  $("#member-table").DataTable({
    ajax: {
      url: "/api/v1/members",
      dataSrc: "datas",
    },
    columns: [
      {
        data: null,
        render: function (data, type, row, meta) {
          return meta.row + meta.settings._iDisplayStart + 1;
        },
      },
      { data: "nama" },
      {
        data: "tanggal_daftar",
        render: function (data) {
          return new Date(+data).toLocaleString("id-ID", {
            dateStyle: "full",
          });
        },
      },
      {
        data: "tanggal_berakhir",
        render: function (data) {
          return new Date(+data).toLocaleString("id-ID", {
            dateStyle: "full",
          });
        },
      },
      {
        data: "tanggal_berakhir",
        render: function (data) {
          let berakhir = new Date(+data).getTime();
          let sekarang = new Date().getTime();
          return sekarang < berakhir
            ? `<p style="color: green;margin:0"><i class="uil uil-check"></i> Aktif</p>`
            : `<p style="color: red;margin:0"><i class="uil uil-times"></i> Tidak Aktif</p>`;
        },
      },
      {
        data: "id",
        render: function () {
          return `<i class="uil uil-edit" style="color: green;"></i>`;
        },
      },
      {
        data: "id",
        render: function () {
          return `<input type="checkbox" name="" class="checkbox-delete" />`;
        },
      },
    ],
    initComplete: function () {
      $(".checkbox-delete").on("click", function () {
        if ($(this).is(":checked")) {
          $(".hapus-button").attr("disabled", false);
        } else {
          $(".hapus-button").attr("disabled", true);
        }
      });
    },
  });
});
