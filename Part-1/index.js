/*


Bir değişken isim ve bir değişken yas oluştur.

isim bir string, yas bir number olsun.

Eğer yas 18’den büyük veya eşitse ekrana "Reşitsin, Hoşgeldin!" yazsın.

Değilse "Üzgünüm, giriş yasak" yazsın.


*/

let name = "Harun";
let yas = 9;

if (yas >= 18) {
  console.log("Resitsin, Hosgeldin!");
} else {
  console.log("Üzgünüm, giriş yasak");
}

/*

Bir kullanıcıdan sayı alın (prompt kullanabilirsin).

Sayı pozitif, negatif veya sıfır olduğunu ekrana yazdır.

Ek olarak, sayı çift ise "Çift sayı", tek ise "Tek sayı" yazsın.

*/

let sayi = prompt("Lutfen Bir Sayi Giriniz");

if (sayi > 0) {
  console.log("sayi pozitif");
} else if (sayi < 0) {
  console.log("sayi negatiftir");
} else if (sayi == 0) {
  console.log("sayi sifirdir");
} else {
  console.log("Lutfen gecerli bir sayi giriniz");
}

/*

Bir array oluştur: [12, 7, 5, 20, 9, 30]

Array içindeki 10’dan büyük sayıları ekrana yazdır.

Ayrıca, bu sayıların toplamını da ekrana yazdır.

*/

let arr = [12, 7, 5, 20, 9, 30];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (element > 10) {
    console.log(element);
  }
}

/*


1’den 50’ye kadar olan sayıları ekrana yazdır.

Sadece 3 veya 5’in katlarını yazdır.

Eğer sayı hem 3 hem 5’in katı ise "FizzBuzz" yazdır, sadece 3’ün katı ise "Fizz", sadece 5’in katı ise "Buzz" yazdır.

*/

let sayi2;

for (let i = 1; i <= 50; i++) {
  console.log(i);
}

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  }
}
