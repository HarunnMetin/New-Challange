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
