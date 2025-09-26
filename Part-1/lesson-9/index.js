/*
Bir öğrenci dizisi oluştur:

👉 Şartlar:
1. Notu 60’ın üzerinde olan öğrencileri filtrele.
2. Yaşı 20’den küçük olan öğrencileri ele.
3. Bu kişilerin sadece isimlerini yeni bir diziye aktar.
4. Sonucu ekrana yazdır.
*/

let students = [
  { name: "Ali", age: 18, grade: 75 },
  { name: "Ayşe", age: 22, grade: 80 },
  { name: "Mehmet", age: 19, grade: 55 },
  { name: "Elif", age: 17, grade: 90 },
  { name: "Ahmet", age: 20, grade: 65 },
  { name: "Zeynep", age: 19, grade: 95 },
];

let gradeBiggerSixty = students.filter((grade) => grade.grade > 60);

let ageSmallTwenty = gradeBiggerSixty.filter((ages) => ages.age < 20);

let newStudentsName = [];

let names = ageSmallTwenty.map((names) => names.name);
newStudentsName = names;

console.log(newStudentsName);
