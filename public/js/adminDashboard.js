$.get("/api/v1/members", function (data) {
  let memberAktif = data.datas.filter((e) => {
    return new Date() < e.tanggal_berakhir;
  });
  let memberDeaktif = data.datas.filter((e) => {
    return new Date() > e.tanggal_berakhir;
  });
  let tanggal_daftar = data.datas.map((e) => {
    return e.tanggal_daftar;
  });
  $(".member-total b").html(data.datas.length + " Membership");
  $(".member-aktif")
    .html(
      `<b style="color: #1cc88a">${memberAktif.length} Aktif <i class="uil uil-check"></i></b>
      <b style="color: #e74839"> ${memberDeaktif.length} Tidak Aktif <i class="uil uil-times"></b>`
    )
    .css("color", "green");
  $(".member-hasil b").html(`Rp.${memberAktif.length * 100000}.-`);

  // CHHART

  // Mendapatkan tanggal hari ini
  let today = new Date();
  let pastDate = new Date(today);
  let monthsArray = [];
  let comparisonArray = [];
  let resultObject = {};
  // melakukan loop dari beberapa bulan lau hingga depan untuk menjadi title chart
  for (let index = -4; index < 2; index++) {
    pastDate.setMonth(today.getMonth() + index);
    let month = pastDate.toLocaleString("id-ID", {
      month: "long",
    });
    monthsArray.push(month);
    resultObject[month] = 0;
  }
  // melakukan loop terhadap data dari API untuk dijadikan result chart
  tanggal_daftar.forEach((e) => {
    let data = new Date(+e);
    comparisonArray.push(
      data.toLocaleString("id-ID", {
        month: "long",
      })
    );
  });

  comparisonArray.forEach((month) => {
    if (resultObject.hasOwnProperty(month)) {
      resultObject[month]++;
    }
  });
  const resultArray = Object.values(resultObject);

  const ctx = document.getElementById("myChartBar");
  new Chart(ctx, {
    type: "bar", // Menggunakan bar chart
    data: {
      labels: monthsArray,
      datasets: [
        {
          label: "Member Baru",
          data: resultArray,
          backgroundColor: ["rgba(64, 102, 213, 0.5)"], // Warna latar belakang untuk setiap batang
          borderColor: "rgba(0, 0, 0, 1)", // Warna border untuk setiap batang
          borderWidth: 1,
        },
      ],
    },
    options: {
      // Animasi ketika chart muncul
      animation: {
        duration: 1500,
        easing: "easeOutQuart", // Efek animasi easing yang halus
      },
      // Skala sumbu y dimulai dari nol
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 2, // Langkah nilai sumbu y
          },
        },
      },
      // Tampilan tooltip yang lebih baik
      tooltips: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        bodyFontColor: "#fff",
        titleFontColor: "#fff",
        titleFontSize: 14,
        xPadding: 10,
        yPadding: 10,
        cornerRadius: 4,
        displayColors: false,
      },
    },
  });

  const PIE = document.getElementById("myChartPie");
  new Chart(PIE, {
    type: "pie", // Menggunakan pie chart
    data: {
      labels: ["Member Aktif", "Member Tidak Aktif"],
      datasets: [
        {
          label: "Member Baru",
          data: [memberAktif.length, 3],
          borderWidth: 5,
          backgroundColor: ["#1cc88a", "#e74839"],
        },
      ],
    },
    options: {
      // Animasi ketika chart muncul
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      // Legenda (label pada chart) yang lebih baik
      legend: {
        position: "bottom",
        labels: {
          fontSize: 12,
          padding: 20,
          boxWidth: 15,
        },
      },
      // Tampilan tooltip yang lebih baik
      tooltips: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        bodyFontColor: "#fff",
        titleFontColor: "#fff",
        titleFontSize: 14,
        xPadding: 10,
        yPadding: 10,
        cornerRadius: 4,
        displayColors: false,
      },
    },
  });
});
