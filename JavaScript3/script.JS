// Pengenalan Fungsi dan Definisi Fungsi
// Fungsi adalah blok kode yang dapat dipanggil dan digunakan kembali.
// Menulis dan Memanggil Fungsi

//membuat function

function sapa() {
    console.log ("halo! selamat datang.");
}

//memanggil function

sapa();



function name() {
    console.log ("Halo! Nama saya Faust.");
}
name();

//Parameter dalam Fungsi
function sapaNama(nama) {
    console.log("Halo, " + nama +"!");
}
sapaNama("Yuwan");

//Mengembalikan Nilai dari Fungsi

function tambah(a,b) {
    return a+b;
}

let hasilPenambahan= tambah (3,5);
console.log("Hasil Penambahan:", hasilPenambahan);

//soal
let buah =["Apel","Jeruk","Pisang"];

console.log(buah[1]);
console.log(buah[2]);

//10 nama orang dalam array tampilkan semua
//Buat function penjumlahan dan perkalian

let nama =["Joko","Imron","Abdul","Dewi","Iwan","Agung","Slamet","Saras","Ninuk","Yuwan"];

console.log(nama[0]);
console.log(nama[2]);
console.log(nama[3]);
console.log(nama[4]);
console.log(nama[5]);
console.log(nama[6]);
console.log(nama[7]);
console.log(nama[8]);
console.log(nama[9]);

//forEach

nama.forEach(function (item,index) {
    console.log("Nama " + item + "index " + index );
});







function perkalian(a, b) {
    return a * b;
}

const hasil = perkalian(5, 3);
console.log("Hasil:", hasil)


function tambah(a,b) {
    return a+b;
}

let hasilpenambahan= tambah (4,8);
console.log("Hasil Penambahan:", hasilpenambahan);
