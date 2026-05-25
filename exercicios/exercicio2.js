const idade = 18;
const maiorIdade = idade >= 18;

console.log("A idade é maior ou igual a 18? ", maiorIdade);

let matematica = 5;
let portugues = 10;

let calculoMedia = (matematica + portugues) / 2;
const media = calculoMedia >= 7;

console.log("A média é maior ou igual que 7? ", media);

let valorCompra = 35.9;
let valorPago = 50;
console.log("Valor da compra: R$", valorCompra);
console.log("Valor recebido: R$", valorPago);
let troco = valorPago % valorCompra;

console.log("O troco será: R$", troco);

const senhaUm = "St0rm";
const senhaDois = "Storm";

const confirmacao = senhaUm === senhaDois;

console.log("As senhas são iguais? ", confirmacao);

const totalAulas = 300;
const faltas = 76;
const faltasPermitidas = totalAulas * 0.25;
const ultrapassaFaltas = faltas > faltasPermitidas;

console.log("O aluno ultrapassou as faltas permitidas? ", ultrapassaFaltas);

const temLogin = false;
const temSenha = true;
const possuiAcesso = temLogin == temSenha && temLogin != false;

console.log("Usuário tem login e senha? ", possuiAcesso);
console.log(temLogin && temSenha);

let disponivel = false;

console.log("Não está disponivel? ", !disponivel);

const x = 26;
const y = 26;
const pares = x % 2 === 0 && y % 2 === 0;
const iguais = x === y;
const paresIguais = pares == true && iguais == true;

console.log("Os números são pares e são iguais? ", paresIguais);

// let numero1 = 4;
// let numero2 = 4;
// console.log(
//   numero1 % 2 === 0 &&
//   numero2 % 2 === 0 &&
//   numero1 === numero2 ); 
// true ou false

const porcent = 0.15;
const numeroSol = 120;
let calcPorcent = numeroSol * porcent;

console.log("15% de 120 é igual a", calcPorcent);

let ordem = 2 + 3 * 5;

console.log(
  "O resultado do cálculo é",
  ordem,
  ", porque o js vai sempre seguir a regra matemática de multiplicação e divisão antes de soma, a menos que coloquemos parenteses no que desejamos que seja calculado primeiro",
);
