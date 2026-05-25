// let contador = 1;

// while (contador <= 10) {
//   console.log("Número atual:", contador);
//   contador++;
// }

let numero = 1;

do {
  console.log("Número atual:", numero);
  numero++;
} while (numero <= 10);

// const palavra = "Ele é um radiante";

// for (let cont = 0; cont < palavra.length; cont++) {
//   console.log(palavra[cont]);
// }

const palavra = "Ele é um radiante";
let cont = 0;
do {
  console.log(palavra[cont]);
  cont++;
} while (cont < palavra.length);

// for (let numero = 0; numero <= 15; numero++) {
//   if (numero % 2 > 0) {
//     console.log("Número impar encontrado", numero);
//   }
// }

let num = 0;
do {
  if (num % 2 > 0) {
    console.log("número impar encontrado", num);
  }
  num++;
} while (num <= 15);

let number = 0;

do {
  if (number % 2 == 0) {
    console.log("número par encontrado", number);
  }
  number++;
} while (number <= 15);
