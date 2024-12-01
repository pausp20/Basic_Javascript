// 1. Pengkondisian (Conditional Statements)
// a. IF Statement

let x = 45;
if (x > 90) {
    console.log("Selamat Anda mendapat nilai A");
} else if (x > 78) {
    console.log("Selamat Anda mendapat nilai B");
} else if (x >= 50) { // Nilai C dimulai dari 50 hingga 77
    console.log("Selamat Anda mendapat nilai C");
} else { // Jika nilai kurang dari 50
    console.log("Selamat Anda mendapat nilai D");
}

// b. Switc Statment
let day="Tuesday";
switch (day) {
    case "Monday":
        console.log("Hari Senin");
        break;
    case "Tuesday":
        console.log("Hari Selasa");
        break;
    default:
        console.log("Hari lainnya");
}

// 2. Operator Perbandingan & Logika
// a. Operator Perbandingan
// - `==` : Equal to
// - `===` : Strict equal to (value and type)
// - `!=` : Not equal to
// - `!==` : Strict not equal to
// - `>` : Greater than
// - `<` : Less than
// - `>=` : Greater than or equal to
// - `<=` : Less than or equal to 


letx=5;
lety="5";
if (x==y){
    console.log("Nilai dan tipe sama");
}else {
    console.log("Nilai atau tipe berbeda");
}


// b. Operator Logika
// - `&&` : Logical AND
// - `||` : Logical OR
// - `!` : Logical NOT
let age = 25;
if (age >= 18 && age <= 30) {
  console.log("Dewasa muda");
}

// AND
//  TRUE && TRUE => TRUE
//  TRUE && FALSE => FALSE
//  FALSE && TRUE => FALSE
//  FALSE && FALSE => FALSE
// OR
//  TRUE || TRUE => TRUE
//  TRUE || FALSE => TRUE
//  FALSE || TRUE => TRUE
//  FALSE || FALSE => 
    
// ! atau NOT 
// !false => TRUE
// !true => FALSE

let negasi = 10 > 5;
if ( !negasi ) {
  console.log("ini kondisi benar");
}else {
    console.log("ini kondisi salah");
}

//perulangan / looping
for (let i =0;i < 3; i++) {
    console.log ("Angka ",i);
}

//perulangan while
let i=0;
while (i<3) {
    console.log("iterasi ke-" +i);
    i++;
}

// i = 0
//     0 < 3 => true
        // Angka 0
            // i++ => => i = i + 1 => i = 0 + 1  => 1
//   i = 1
//     1 < 3 => true
        // Angka 1
            // i++ => => i = i + 1 => i = 1 + 1  => 2
// i = 2
//     2 < 3 => true
        // Angka 2
            // i++ => => i = i + 1 => i = 2 + 1  => 3
//i = 3
//   3 < 3 => false



//array kumpulan data yang type datanya bisa lebih dari satu
//array memiliki index,index dimulai dari 0.
let number= [1,2,3,4,5,6];
let names = ["dimas","rei","reza","sinta"];
console.log(numbers[4]);
console.log(names[2]);

//cek panjang karakter array numbers console.log(number.length)

let sum=0;
for (let i=0;  i < number.length; i++){
    sum=sum+number[i];
}
console.log("Total:" + sum);

// i=0   | sum = 0
  // sum = sum + numbers[0]
    // sum = 0 + 1
      // sum = 1
        // Total: 1
// i=1   | sum = 1
  // sum = sum + numbers[1]
    // sum = 1 + 2
      // sum = 3
        // Total: 3
// i=2   | sum = 3
  // sum = sum + numbers[2]
    // sum = 3 + 3
      // sum = 6
        // Total: 6
 // i=3   | sum = 6
  // sum = sum + numbers[3]
    // sum = 6 + 4
      // sum = 10
        // Total: 10
// i =4 stop
