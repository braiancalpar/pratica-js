// Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.

function saudacao(nome) {
  console.log("Olá! Seja bem vindo", nome, "!");
}

// Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."

const apresentarPessoa = (nome, idade) => {
  console.log("Olá! Meu nome é", nome, "e tenho", idade, "anos.");
};

// Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
// A função deve calcular o IMC utilizando a fórmula:
// IMC = peso / (altura * altura)
// A função deve retornar o valor do IMC.
// Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.

const calcularIMC = (peso, altura) => peso / (altura * altura);
const imc = calcularIMC(92, 1.75);
console.log("O valor do IMC é:", imc);

//Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.

function verificarAprovacao(nota) {
  if (nota >= 7) {
    return console.log("Aprovado");
  } else {
    return console.log("Reprovado");
  }
}
verificarAprovacao(10);

//Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.

const ehPar = (numero) => {
  if (numero % 2 == 0) {
    return console.log("É par?", true);
  } else {
    return console.log("É par?", false);
  }
};
ehPar(5);

// Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.

function somar(a, b) {
  return a + b;
}

const soma = (numero1, numero2) => numero1 + numero2;
const resultado = soma(80, 20);
console.log("A soma é:", resultado);

// Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
// A função deve receber dois parâmetros: valorCompra e valorPago.
// A função deve:
// calcular o valor do troco
// retornar o valor calculado
// Depois, utilize o retorno da função para exibir o valor do troco no console.

function calcularTroco(valorCompra, valorPago) {
  return valorPago % valorCompra;
}
console.log("O troco é R$:", calcularTroco(70, 35));

//Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.
// const soma = (numero1, numero2) => numero1 + numero2;
// const resultado = soma(80, 20);
// console.log("A soma é:", resultado);
//Feito

//Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".

function executarAcao(acao) {
  acao();
}

executarAcao(function () {
  console.log("Executando ação!");
});

// Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).

function fazerPergunta(pergunta, respostaCorreta) {
  let respostaUsuario = respostaCorreta; // simulação da resposta

  if (respostaUsuario === respostaCorreta) {
    console.log("Resposta correta!");
  } else {
    console.log("Resposta errada!");
  }
}

fazerPergunta("Qual é a capital do Brasil?", "Brasília");
