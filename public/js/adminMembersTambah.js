$(document).ready(function () {
  $("#add-member").submit(function (e) {
    e.preventDefault();

    // ADD TO FORM
    const formData = {
      nama: $("#exampleInputEmail1").val(),
      tanggal_daftar: new Date().getTime().toString(),
      tanggal_mulai: new Date().getTime().toString(),
      tanggal_berakhir: new Date()
        .setDate(new Date().getDate() + +$(".form-select").val())
        .toString(),
    };
    console.log(formData);

    // Mengirim permintaan POST dengan jQuery AJAX
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/v1/members",
      data: JSON.stringify(formData),
      contentType: "application/json",
      success: function (response) {
        if (response.status_code == 201) {
          window.location = "/admin/members";
        }
      },
      error: function (error) {
        alert("Terjadi kesalahan saat mengirim data: ", error);
      },
    });
  });
});
