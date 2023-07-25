$("#form-laporan").submit(function (e) {
  e.preventDefault();
  let dari_tanggal = new Date($("#dari_tanggal").val()).getTime();
  let sampai_tanggal = new Date($("#sampai_tanggal").val()).getTime();
  let formData = {
    dari_tanggal: dari_tanggal,
    sampai_tanggal: sampai_tanggal,
  };

  $.ajax({
    type: "POST",
    url: "http://localhost:3000/api/v1/utils/uploads",
    data: JSON.stringify(formData),
    contentType: "application/json",
    success: function (response) {
      console.log(response);
      if (response.status_code == 201) {
        window.location = "/admin/members";
      }
    },
    error: function (error) {
      alert("Terjadi kesalahan saat mengirim data: ", error);
    },
  });
});
