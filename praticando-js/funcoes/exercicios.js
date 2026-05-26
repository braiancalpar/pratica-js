// FUNCTION

// elevar um número x a uma potência y

function calculaPotencia(num, pow) {
  let resultado = 1;
  for (let i = 0; i < pow; i++) {
    resultado = resultado * num;
  }
  return resultado;
}

console.log(calculaPotencia(4, 2));

// código omitido

// criar função que calcula o fatorial de um número usando recursão.
// fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 x 4 x 3 x 2 x 1

const fatorial = function f(num) {
  if (num === 0 || num === 1) return 1;
  return num * f(num - 1);
};

// 5 * fatorial(4) // 120
// 4 * fatorial(3) // 24
// 3 * fatorial(2) // 6
// 2 * fatorial(1) // 2
console.log(fatorial(5));

// Criar uma função para calcular juros compostos
// função deve receber os valores no formato inteiro: valor, % de juros e tempo
// fórmula: valor * (juro elevado a tempo)

const calculaJuros = (valor, juros, tempo) => {
  let taxaJuros = juros / 100 + 1;
  return valor * Math.pow(taxaJuros, tempo);
};

console.log(calculaJuros(1000, 5, 2));

// CALLBACKS

// criar uma função que faça operações matemáticas entre 2 valores (soma e multiplicação)
// função deve receber por parâmetro: operação desejada, valor1 e valor2

function soma(a, b) {
  return a + b;
}

function multiplica(a, b) {
  return a * b;
}

function calcula(fnOperacao, valorA, valorB) {
  return fnOperacao(valorA, valorB);
}

console.log(calcula(soma, 5, 5));
console.log(calcula(multiplica, 5, 5));

// criar uma função que emita umamensagem caso usuário x não esteja interagindo com o sistema após quantidade y de tempo

const userId = "4545656";
//const avisaUsuario = (userId) => console.log(`A sessão de ${userId} está inativa`);

//setTimeout(avisaUsuario, 2000, userId);
setTimeout(
  (userId) => console.log(`A sessão de ${userId} está inativa`),
  1000,
  userId,
);
