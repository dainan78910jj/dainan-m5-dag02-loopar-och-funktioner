// Dag 2, del 2: Funktioner. Gör ALLA tester gröna på tests.html.
// Regler: skriv funktionerna själv, i den här filen. Ändra inte tests.ts.
// Röda understrykningar tills du skrivit return är normalt: TypeScript vet att funktionen ska ge ett värde.

// 1. Ska returnera priset som text med " kr".
//    Heltal utan decimaler: formateraPris(35) ger "35 kr".
//    Decimaltal med två decimaler och komma: formateraPris(91.8) ger "91,80 kr".
export function formateraPris(pris: number): string {
  if (pris < 0) {
    throw new Error("Invalid price");
  }

  if (Number.isInteger(pris)) {
    return `${pris} kr`;
  } else {
    return `${pris.toFixed(2).replace(".", ",")} kr`;
  }
}

// 2. Momsdelen av ett pris med 12 % moms (fiktiv sats), avrundad till två decimaler.
//    momsDel(112) ger 12.
function toPrice(value: number): number {
  if (Number.isInteger(value)) {
    return value;
  } else {
    return Math.round(value * 100) / 100;
  }
}

export function momsDel(pris: number): number {
  if (pris < 0) {
    throw new Error("Invalid price");
  }

  let value = (pris / 112) * 12;
  return toPrice(value);
}

// 3. Priset efter rabatt i procent. medRabatt(100, 10) ger 90.
export function medRabatt(pris: number, procent: number): number {
  if (pris < 0) {
    throw new Error("Invalid price");
  }
  if (procent < 0 || procent > 100) {
    throw new Error("Invalid procent");
  }

  let value = pris - (pris * procent) / 100;
  return toPrice(value);
}

// 4. Är kaféet öppet? Vardagar 7–18, helger (lördag, söndag) 9–16.
//    Öppnar vid starttimmen, stänger vid sluttimmen (18 är stängt).
export function ärÖppet(veckodag: string, klockslag: number): boolean {
  if (
    ((veckodag === "måndag" ||
      veckodag === "tisdag" ||
      veckodag === "onsdag" ||
      veckodag === "torsdag" ||
      veckodag === "fredag") &&
      klockslag >= 7 &&
      klockslag < 18) ||
    ((veckodag === "lördag" || veckodag === "söndag") &&
      klockslag >= 9 &&
      klockslag < 16)
  ) {
    return true;
  } else {
    return false;
  }
}

// 5. Summan av alla tal i listan, med en loop. summa([1, 2, 3]) ger 6.
export function summa(tal: number[]): number {
  let sum = 0;
  for (let i = 0; i < tal.length; i++) {
    sum += tal[i];
  }
  return sum;
}

// 6. Medelvärdet. snitt([2, 4, 6]) ger 4. Tom lista ger 0.
export function snitt(tal: number[]): number {
  if (tal.length === 0) {
    return 0;
  } else {
    let sum = 0;
    let averageValue = 0;
    for (let i = 0; i < tal.length; i++) {
      sum += tal[i];
    }
    averageValue = sum / tal.length;
    return averageValue;
  }
}

// 7. Det största talet, med en loop. största([3, 9, 4]) ger 9. Tom lista ger undefined.
export function största(tal: number[]): number | undefined {
  // solution 1
  if (tal.length === 0) {
    return undefined;
  } else {
    let maxValue = tal[0];
    for (let i = 1; i < tal.length; i++) {
      if (tal[i] > maxValue) {
        maxValue = tal[i];
      }
    }
    return maxValue;
  }

  // solution 2
  // let maxValue = undefined;
  // for (const t of tal) {
  //   if (maxValue === undefined || maxValue < t) {
  //     maxValue = t;
  //   }
  // }
  // return maxValue;
}

// 8. Upprepa en text. upprepa("ab", 3) ger "ababab". Använd en loop.
export function upprepa(text: string, antal: number): string {
  let res = "";
  for (let i = 0; i < antal; i++) {
    res += text;
  }
  return res;
}

// 9. En kvittorad. kvittorad("Kaffe", 2, 32) ger "2 x Kaffe: 64 kr".
//    Använd formateraPris från uppgift 1.
export function kvittorad(namn: string, antal: number, pris: number): string {
  let prisVal = formateraPris(pris * antal);
  return `${antal} x ${namn}: ${prisVal}`;
}

// 10. Pilfunktioner. Skriv dem själv med const och =>.
//     dubbla(4) ger 8. ärJämnt(4) ger true.
export const dubbla = (n: number): number => 2 * n;

export const ärJämnt = (n: number): boolean => n % 2 == 0;

// Skriv en kommentar som förklarar skillnaden mellan function dubbla(n) { ... } och pilfunktionen.
// There is no difference between the two in terms of basic functionality; arrow functions simply offer a more concise syntax.
