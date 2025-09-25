/*
Bir dizideki en büyük ve en küçük sayıyı bul.

*/

let arr = [23, 5, 67, 12, 89, 2];

let min = Math.min(...arr);
let max = Math.max(...arr);

console.log("kucuk sayi :" + min + "buyuk sayi :" + max);

/*
Bir dizide kaç tane çift ve kaç tane tek sayı olduğunu say.

*/
let numbers = [10, 15, 22, 33, 40, 7, 9];
let even = 0;
let odd = 0;

for (let i = 0; i < numbers.length; i++) {
  let element = numbers[i];
  if (element % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}

console.log("Cift sayilar: " + even);
console.log("Tek sayilar: " + odd);

/*
Bir dizide kaç tane çift ve kaç tane tek sayı olduğunu say.

*/

let num = [
  10,
  15,
  3,
  7,
  67,
  4,
  3,
  56,
  3,
  67,
  83,
  12,
  32,
  47,
  32,
  41,
  59,
  87,
  22,
  33,
  40,
  7,
  9,
];

let even2 = 0;
let odd2 = 0;
for (let numb of num) {
  if (numb % 2 == 0) {
    even2++;
  } else {
    odd2++;
  }
}
console.log("Cift sayilar: " + even2);
console.log("Tek sayilar: " + odd2);
