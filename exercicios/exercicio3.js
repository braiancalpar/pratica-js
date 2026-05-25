const idade = 18;

if (idade >= 18) {
  console.log("Pode comprar bebida alcoólica");
} else {
  console.log("Venda proibida para menores de 18 anos");
}

const horaAtual = 20;

if (horaAtual >= 6 && horaAtual <= 12) {
  console.log("Bom dia");
} else if (horaAtual >= 12 && horaAtual <= 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

const num = 11;

if (num > 0) {
  console.log("Número positivo");
} else if (num < 0) {
  console.log("Número negativo");
} else {
  console.log("Número igual a zero");
}

const nota = 0;

// if(nota >= 9){
//     console.log("A")
// }else if(nota >= 8){
//     console.log("B")
// }else if((nota >= 6 && nota <= 7) || nota == 9){
//     console.log("C")
// }else if((nota >= 4 && nota <= 5) || nota == 9){
//     console.log("D")
// }else if((nota >= 0 && nota <= 3) || nota == 9){
//     console.log("E")
// }

// if (nota > 9) {
//   console.log("A");
// } else if (nota == 8) {
//   console.log("B");
// } else if (nota >= 6 && nota <= 7) {
//   console.log("C");
// } else if (nota >= 4 && nota <= 5) {
//   console.log("D");
// } else if (nota >= 0 && nota <= 3) {
//   console.log("E");
// } else {
//   console.log("A,B,C,D,E");
// }

// 4. Conversão de nota em conceito

if (nota >= 9) {
  console.log("Conceito A");
} else if (nota >= 8) {
  console.log("Conceito B");
} else if (nota >= 6) {
  console.log("Conceito C");
} else if (nota >= 4) {
  console.log("Conceito D");
} else {
  console.log("Conceito E");
}

// const numero = 4;

// if (numero % 2 == 0) {
//   console.log("É par");
// } else {
//   console.log("É impar");
// }

let resultado = numero2 % 2 === 0 ? "Par" : "Ímpar";

console.log("O número é: " + resultado);

let seletor = 3;

switch (seletor) {
  case 1:
    console.log("Cadastrar");
    break;
  case 2:
    console.log("Listar");
    break;
  case 3:
    console.log("Sair");
    break;
  default:
    console.log("Valor inválido");
    break;
}

let email = "";

if (email == "") {
  console.log("Preencha o campo de e-mail");
} else {
  console.log("Email válido");
}

const senha = "Zy123mors";
const senhaValida = true;

if (senhaValida == true) {
  console.log("Senha válida");
} else {
  console.log("Senha muito curta");
}

const saldoDisponivel = 50;
const valorCompra = 163;

if (saldoDisponivel >= valorCompra) {
  console.log("Compra aprovada");
} else {
  console.log("Saldo insuficiente");
}

const nome = "George";
const e_mail = "benjor@gtmal.com";
const Idade = 56;
const formularioValido = true;

if (formularioValido == true) {
  console.log("Formulário enviado com sucesso");
} else {
  console.log("Por favor, preencha todos os campos corretamente");
}
