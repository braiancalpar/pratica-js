let nomeCompleto = "Braian John";

console.log(
  "Olá,",
  nomeCompleto,
  "! Seja bem-vindo(a) ao curso de JavaScript!",
);

let anoAtual = 2026;
let anoNascimento = 2001;
let idade = anoAtual - anoNascimento;

console.log("Você tem", idade, "anos.");

let cidade = "Castro";
let estado = "Paraná";
let pais = "Brasil";

console.log("Você está em", cidade, estado, pais);

let temCarteira = true;

console.log(typeof temCarteira);

let saldo = 0;
saldo += 200;
saldo -= 50;

console.log("Saldo final de R$", saldo);

let matematica = 10;
let portugues = 8;
let ciencias = 9;

let media = (matematica + portugues + ciencias) / 3;

console.log("Sua média final é:", media);

let salario = 3000;
let novoSalario = salario * 1.1;

console.log("Devido seu desempenho seu novo salário será:", novoSalario);

let cliques = 0;

cliques++;
cliques++;
cliques++;

console.log("O botão foi clicado", cliques, "vezes");

const PI = 3.14; 

// PI = 3.1415;
// Isso causaria erro pois constantes não podem ser modificadas 

console.log("PI é uma constante e não pode ser alterada: " + PI);

let mensagem = "O número é ";
let numero = 10;
let fusao = mensagem + numero;

console.log(typeof fusao);
console.log(fusao);