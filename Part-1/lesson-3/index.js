/*
Bir dizide tekrar eden sayıları bul.

*/

let arr = [3, 7, 3, 2, 9, 7, 10, 2, 5, 5];

let gorulenler = [];
let tekrarEdenler = [];

for (const element of arr) {
  if (gorulenler.includes(element)) {
    if (!tekrarEdenler.includes(element)) {
      tekrarEdenler.push(element);
    }
  } else {
    gorulenler.push(element);
  }
}
console.log("Gorulenler" + gorulenler);
console.log("Tekrar Edenler" + tekrarEdenler);

/*
Bir string dizisinde en uzun kelimeyi bul.

*/
let kelimeler = ["masa", "telefon", "kalem", "defter", "bilgisayar"];

let enUzunKelime = "";

for (const kelime of kelimeler) {
  if (kelime.length > enUzunKelime.length) {
    enUzunKelime = kelime;
  }
}
console.log("En uzun kelime :" + enUzunKelime);


