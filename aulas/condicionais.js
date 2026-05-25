const idade = 17;

// if (idade >= 18) {
//   console.log("É maior de idade ");
// } else {
//   console.log("É menor de idade ");
// }

// condicao ternaria
idade >= 18 ? console.log("maior de idade") : console.log("Menor de idade");

// entre 9 e 10: exelente
// entre 7 e 8: bom
// entre 4 e 6: médio
// entre 0 e 3: ruim

const notaAluno = 8;

const notaDoAluno = 8;

// if (notaDoAluno >= 9) {
//     console.log('Nota excelente');
// } else if (notaDoAluno >= 7) {
//     console.log('Nota boa');
// }else if (notaDoAluno >= 4) {
//     console.log('Nota mediana');
// } else {
//     console.log('Nota ruim');
// }

notaDoAluno >= 9
  ? console.log("Nota excelente")
  : notaDoAluno >= 7
    ? console.log("Nota boa")
    : notaDoAluno >= 4
      ? console.log("Nota média")
      : console.log("ruim");
