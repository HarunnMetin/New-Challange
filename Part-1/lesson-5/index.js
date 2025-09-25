/*
Bir fonksiyon yaz: enBuyukSayi(arr)

Parametre olarak bir sayı dizisi alacak.

Fonksiyon dizideki en büyük sayıyı döndürecek.

Örnek: [3, 15, 7, 20, 10] → 20
*/

let number = [3, 15, 7, 20, 10];

console.log(enBuyukSayi(number));

function enBuyukSayi(arr) {
  let enBuyuk = Math.max(...arr);
  return enBuyuk;
}

/*
Bir fonksiyon yaz: tekSayilariBul(arr)

Parametre olarak bir sayı dizisi alacak.

Fonksiyon dizideki tüm tek sayıları bir dizi olarak döndürecek.

Örnek: [1, 2, 3, 4, 5] → [1, 3, 5]
*/

let arr = [1, 2, 3, 4, 5];

console.log(tekSayilar(arr));

function tekSayilar(arr) {
  let tekSayi = [];

  for (const number of arr) {
    if (number % 2 !== 0) {
      tekSayi.push(number);
    }
  }
  return tekSayi;
}
