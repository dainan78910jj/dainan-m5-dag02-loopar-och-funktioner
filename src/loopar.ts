// Dag 2, del 1: Loopar. Resultatet syns i Console (F12).

import { summa } from "./funktioner";

// UPPGIFT 1: skriv ut talen 1 till 10, ett per rad, med en for-loop.
for (let index = 1; index <= 10; index++) {
  console.log(`Row ${index}`);
}

// UPPGIFT 2: skriv ut talen 10 till 1 (nedräkning) med en while-loop.
//            Skriv "Kaffe!" efter 1.

// for (let index = 10; index >= 1; index--) {
//   console.log(`Row ${index}`);
// }
// console.log("Kaffe!");

let i: number = 10;
while (i >= 1) {
  console.log(`Row ${i}`);
  i--;
}
console.log("Kaffe!");

// UPPGIFT 3: gör samma sak som uppgift 1, men skriv bara ut jämna tal.
//            Tips: n % 2 === 0

for (let index = 1; index <= 10; index++) {
  if (index % 2 === 0) {
    console.log(`Row ${index}`);
  }
}

// UPPGIFT 4: här är kaféets prislista. Skriv ut ett kvitto med en for...of-loop:
//            "Kardemummabulle: 35 kr" osv, och sist "Summa: ... kr".
const prislista: number[] = [35, 32, 59, 45];
const namnlista: string[] = [
  "Kardemummabulle",
  "Bryggkaffe",
  "Ostmacka",
  "Latte",
];

const produkter = namnlista.map((namn, index) => ({
  namn,
  pris: prislista[index],
}));

let sum = 0;

for (const p of produkter) {
  console.log(`${p.namn}: ${p.pris} kr`);
  sum += p.pris;
}

console.log(`Summa är ${sum} kr`);

// TODO

// UPPGIFT 5 (utmaning): skriv ut en multiplikationstabell för 3:ans tabell,
//            "3 x 1 = 3" till "3 x 10 = 30".

for (let i = 1; i <= 10; i++) {
  console.log(`3 x ${i} = ${3 * i}`);
}
