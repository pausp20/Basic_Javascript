// Mengambil elemen HTML menggunakan document.querySelector() dan document.getElementById().
let judul = document.getElementById("judul");
console.log(judul);
let paragraf = document.querySelector("#paragraf");
// Mengubah konten elemen menggunakan innerHTML dan textContent.
function ubahWarna() {
    judul.style.color = "blue";
    paragraf.innerHTML = "Warna teks telah diubah!";
  }
// ubahWarna();

 // Menambahkan elemen
 function tambahParagraf() {
    let newParagraf = document.createElement("p");
    newParagraf.textContent = "Paragraf baru ditambahkan!";
    newParagraf.classList.add("highlight"); 
    
    document.body.appendChild(newParagraf);
}

// tambahParagraf();

function hapusParagraf() {
  let paragrafTerakhir = document.querySelector("p:last-child");
  if (paragrafTerakhir) {
    paragrafTerakhir.remove();
  }
}

