/*
Bir dizi oluştur:



Dizideki 18 yaşından büyük kişileri filtrele ve yeni bir dizi döndür.
*/

let kisiler = [
  { isim: "Ali", yas: 25 },
  { isim: "Ayşe", yas: 30 },
  { isim: "Mehmet", yas: 17 },
  { isim: "Elif", yas: 20 },
];

let newPersons = [];

let buyuk = kisiler.filter(kisi => kisi.yas > 18);
newPersons = buyuk;

console.log(newPersons);









