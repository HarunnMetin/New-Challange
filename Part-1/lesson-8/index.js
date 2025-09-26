/*
Bir dizi oluştur:


👉 Bu diziden şunları yapmanı istiyorum:

18 yaşından büyük olanları filtrele.

Bu kişilerden sadece “Mühendis” olanların isimlerini yeni bir diziye aktar.

Sonucu ekrana yazdır.
*/

let persons = [
  { isim: "Ali", yas: 25, meslek: "Mühendis" },
  { isim: "Ayşe", yas: 30, meslek: "Doktor" },
  { isim: "Mehmet", yas: 17, meslek: "Öğrenci" },
  { isim: "Elif", yas: 20, meslek: "Mühendis" },
  { isim: "Ahmet", yas: 40, meslek: "Avukat" },
];

let onsekizBuyuk = persons.filter((person) => person.yas > 18);

let onlyEngineer = onsekizBuyuk.filter((job) => (job.meslek === "Mühendis"));

let names = onlyEngineer.map(name => name.isim)

console.log(names);
