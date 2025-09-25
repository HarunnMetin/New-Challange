/*
Bir fonksiyon yaz: arrayToplam(arr)

Parametre olarak bir sayı dizisi alacak.

Fonksiyon dizideki tüm sayıların toplamını döndürecek.

Örnek: [2, 5, 8, 10] → 25
*/

let arr = [2, 5, 8, 10];

console.log(toplam(arr));

function toplam(arr) {
  let toplam = 0;
  for (const element of arr) {
    toplam += element;
  }
  return toplam;
}
