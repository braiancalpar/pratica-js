// IF/ELSE

// definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 4;
const operacao = "divisão";

if (operacao === "soma") {
  console.log(num1 + num2);
} else if (operacao === "multiplicação") {
  console.log(num1 * num2);
} else {
  console.log("Operação inválida!");
}

// localizar o nivel de bônus de acordo com a faixa salarial
// ex: $11000 e acima: 3% de bônus
// $10999 a $7000: 5% de bônus
// $ 6999 a $4000: 7% de bônus
// $3999 p baixo: 9% de bônus

const salarіо = 7000;

if (salarіо >= 11000) {
  console.log("3% de bônus");
} else if (salarіо < 11000 && salarіо >= 7000) {
  console.log("5% de bônus");
} else if (salarіо < 7000 && salarіо >= 4000) {
  console.log("7% de bônus");
} else {
  console.log("9% de bônus");
}

// Operadores
// Verificar se um ano é bissexto.
// um ano é bissexto quando:
// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

const ano = 2000;
// const ano = 2000
// const ano = 2022
// const ano = 1992

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(`${ano} é bissexto`);
} else {
  console.log(`${ano} não é bissexto`);
}

// OP CONDICIONAL E SWITCH

// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas.

const nome = "Roberta";
const nota = 8;
const faltas = 2;
const recebeBonus =
  nota >= 8 && faltas <= 2
    ? `${nome} recebe bônus.`
    : `${nome} não recebe bônus.`;

console.log(recebeBonus);

// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const user = "super premium";

switch (user) {
  case "free":
    console.log("Acesso limitado");
    break;
  case "premium":
    console.log("Acesso total ao app");
    break;
  case "super premium":
    console.log("Acesso total ao app e bônus");
    break;
  default:
    console.log("Tipo de user desconhecido");
    break;
}
