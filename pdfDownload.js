const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/members"); // Ganti dengan alamat halaman HTML Anda
    await page.pdf({ path: "output.pdf", format: "A4" });
    await browser.close();
    console.log("PDF telah berhasil dibuat!");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
})();
