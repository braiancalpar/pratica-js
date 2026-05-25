for (let contador = 1; contador <= 10; contador++) {
  console.log("Número atual:", contador);
}

let soma = 0;
for (let numeros = 1; numeros <= 100; numeros++) {
  soma += numeros;
}
console.log("Soma de 1 a 100:", soma);

//Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.
let numeral = 5;
for (let multiplicacao = 1; multiplicacao <= 10; multiplicacao++) {
  console.log(numeral, "X", multiplicacao, "=", numeral * multiplicacao);
}

//Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".
let contador = 10;

while (contador <= 10 && contador >= 0) {
  console.log("Contagem regressiva", contador);
  contador--;
}
console.log("Contagem finalizada!");

let cont = 0;
let numeroDigitado;
let repeticoes = 0;

do {
  if (repeticoes == 0) {
    numeroDigitado = 5;
  } else if (repeticoes == 1) {
    numeroDigitado = 9;
  } else if (repeticoes == 2) {
    numeroDigitado = 3;
  } else {
    numeroDigitado = 0;
  }
  if (numeroDigitado !== 0) {
    cont++;
  }
  repeticoes++;
} while (numeroDigitado != 0);
console.log("Total de números digitados: " + cont);

//Numero secreto

let numeroSecreto = 19;

for (let tentativa = 1; tentativa <= 3; tentativa++) {
  let numeroTentado;
  if (tentativa == 1) {
    numeroTentado = 12;
  } else if (tentativa == 2) {
    numeroTentado = 5;
  } else {
    numeroTentado = 19;
  }

  if (numeroTentado == numeroSecreto) {
    console.log("Acertou!");
  } else {
    console.log("Tente novamente");
  }
}

//Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.

let anoNascimento = 2001;
let anoAtual = 2026;

for (let passagem = 1; anoNascimento < anoAtual; passagem++) {
  anoNascimento++;
  console.log("Eu tinha", passagem, "anos no ano de", anoNascimento);
}

let aanoNascimento = 2001;

let aanoAtual = 2026;

for (let ano = aanoNascimento; ano <= aanoAtual; ano++) {
  console.log("Em " + ano + " você tinha " + (ano - aanoNascimento) + " anos.");
}

//Mostre todos os números pares entre 1 e 50 usando for.

for (contador = 0; contador <= 50; contador++) {
  if (contador % 2 == 0) {
    console.log("Número par encontrado", contador);
  }
}

// Mostre no console quantos números entre 1 e 100 são divisíveis por 3.

let divisiveis = 0;
for (let numeros = 1; numeros <= 100; numeros++) {
  if (numeros % 3 == 0) {
    divisiveis++;
  }
}
console.log("Quantidade de números divisiveis por 3", divisiveis);

//

let opcao;
let passo = 0;

do {
  // simulação da escolha do usuário
  if (passo == 0) {
    opcao = 1;
  } else if (passo == 1) {
    opcao = 2;
  } else {
    opcao = 3;
  }
  if (opcao == 1) {
    console.log("Ver saldo");
  } else if (opcao == 2) {
    console.log("Fazer depósito");
  } else if (opcao == 3) {
    console.log("Sair");
  }
  passo++;
} while (opcao !== 3);
