function sendWhatsAppMessage() {
    let cover = document.getElementById("cover").value;
    let cpwName = document.getElementById("cpwName").value;
    let cpwNameFull = document.getElementById("cpwNameFull").value;
    let putri = document.getElementById("putri").value;
    let cpwMother = document.getElementById("cpwMother").value;
    let cpwFather = document.getElementById("cpwFather").value;
    let cppName = document.getElementById("cppName").value;
    let cppNameFull = document.getElementById("cppNameFull").value;
    let putra = document.getElementById("putra").value;
    let cppMother = document.getElementById("cppMother").value;
    let cppFather = document.getElementById("cppFather").value;
    let acara1 = document.querySelector('input[name="acara1"]:checked').value;
    let waktuAcara1 = document.getElementById("waktuAcara1").value;
    let jamAcara1 = document.getElementById("jamAcara1").value;
    let tempatAcara1 = document.getElementById("tempatAcara1").value;
    let alamatAcara1 = document.getElementById("tempatAcara1").value;
    let acara2 = document.querySelector('input[name="acara2"]:checked').value;    
    let waktuAcara2 = document.getElementById("waktuAcara2").value;
    let jamAcara2 = document.getElementById("jamAcara2").value;
    let tempatAcara2 = document.getElementById("tempatAcara2").value;
    let alamatAcara2 = document.getElementById("alamatAcara2").value;
    let alamat = document.getElementById("alamat").value;
    let rekening = document.getElementById("rekening").value;
    let kado = document.getElementById("kado").value;
    let musik = document.getElementById("musik").value;
    let catatan = document.getElementById("catatan").value;
    let nomor = document.getElementById("nomor").value;
    let tema = document.getElementById("nomor").value;
    let agama = document.getElementById("agama").value;

    // Validasi form
    if (
      cover === "" ||
      cpwName === "" ||
      cpwNameFull === "" ||
      putri === "" ||
      cpwFather === "" ||
      cpwMother === "" ||
      cppName === "" ||
      cppNameFull === "" ||
      putra === "" ||
      cppFather === "" ||
      cppMother === "" ||
      !acara1 ||
      waktuAcara1 === "" ||
      jamAcara1 === "" ||
      tempatAcara1 === "" ||
      alamatAcara1 === "" ||
      !acara2 ||
      waktuAcara2 === "" ||
      jamAcara2 === "" ||
      tempatAcara2 === "" ||
      alamatAcara2 === "" ||
      alamat === "" ||
      rekening === "" ||
      kado === "" ||
      catatan === "" ||
      musik === "" ||
      nomor === "" ||
      tema === "" ||
      agama === ""
  ) {
      alert("Harap lengkapi semua field sebelum mengirimkan form.");
      return;
  }

  // Jika form sudah diisi, buat pesan WhatsApp
let message = `Form Pernikahan
\n*Urutan Nama Mempelai* :${cover}
\n*1. Calon Mempelai Wanita :*\n  A. Nama Panggilan : ${cpwName}\n B. Nama Lengkap : ${cpwNameFull}\n C. Anak Ke.. / Putri Ke ${cpwNameFull}\n D. Nama Bapak: ${cpwFather}\n E.Nama Ibu: ${cpwMother}
\n*2. Calon Mempelai Pria*\n  A. Nama Panggilan : ${cppName}\n B. Nama Lengkap : ${cppNameFull}\n C. Anak Ke.. / Putra Ke ${cppNameFull}\n D. Nama Bapak: ${cppFather}\n E. Nama Ibu: ${cppMother}
\n*3. Akad Nikah / Pemberkatan*\n A. Acara: ${acara1}\n B. Hari & Tanggal : ${waktuAcara1}\n C. Jam (WIB/WITA/WIT) : ${jamAcara1}\n D. Tempat : ${tempatAcara1}\n E. Alamat : ${alamatAcara1}
\n*4. Resepsi Pernikahan*\n A. Acara: ${acara2}\n B. Hari & Tanggal : ${waktuAcara1}\n C. Jam (WIB/WITA/WIT) : ${jamAcara2}\n D. Tempat : ${tempatAcara2}\n E. Alamat : ${alamatAcara2}
\n*5. Share Location link Map*\n- Link Maps : ${alamat}
\n*6. Fitur Angpao*\n- Rekening dan Dompet Digital : ${rekening}\n- Alamat Kirim Kado : ${kado}
\n*7. Love story*\n- Love story : ${catatan}
\n*8. Lagu/Musik*\n- Musik : ${musik}
\n*9. No Whatsapp*\n- No WA : ${nomor}
\n*10. Tema yang dipilih*\n- Tema : ${tema}
\n*11. Agama*\n- Agama : ${agama}`;

  
    // Kirim pesan via WhatsApp
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  }
  