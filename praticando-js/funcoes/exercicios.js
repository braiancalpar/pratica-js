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

// Imagine que você está criando uma página de boas-vindas para um site de cursos online. Ao acessar a plataforma, o sistema precisa exibir uma mensagem de saudação para cada usuário. Às vezes, porém, o nome da pessoa pode estar ausente — e, nesse caso, uma saudação genérica deve ser exibida.
// Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro, mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica. Use o parâmetro pré-definido para lidar com isso.

function saudacao(nome = "") {
  if (nome) {
    console.log(`Olá, ${nome}! Boas vindas!`);
  } else {
    console.log("Olá! Boas vindas!");
  }
}

saudacao("Kaladin");
saudacao();

// Imagine que você está criando um sistema para um e-commerce que vende livros.Toda vez que o cliente aplica um cupom de desconto, o sistema precisa calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto.
// Sua missão é criar uma função chamada calcularDesconto que receba dois parâmetros:
// o preço original do produto,
// a porcentagem de desconto (com um valor padrão de 10%).

// versão direta
function calcularDesconto(valor, desconto = 10) {
  return valor - valor * (desconto / 100);
}
// versão padrão
// function calcularDesconto(preco, desconto = 10) {
//     const valorFinal = preco - (preco * desconto / 100);
//     return valorFinal;
// }
console.log(calcularDesconto(100, 20));

// Imagine que você está criando uma pequena ferramenta para alunos acompanharem seu desempenho escolar. A ideia é que o aluno insira suas duas notas principais e o sistema exiba a média aritmética entre elas.
// Sua tarefa é criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.

const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;
console.log(calcularMedia(10, 6));

// Imagine que você está desenvolvendo uma funcionalidade para um sistema de quiz matemático. Cada vez que o jogador digita um número, o sistema precisa informar se ele é par ou ímpar — mas a lógica precisa estar encapsulada em uma arrow function.
// Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:
// "Par" se o número for par
// "Ímpar" se for ímpar

// const verificarParidade = (numero) => numero % 2 === 0 ? "Par" : "Ímpar";
const verificarParidade = (numero) => {
  if (numero % 2 === 0) {
    console.log("Par");
  } else {
    console.log("Impar");
  }
};

verificarParidade(7);

// Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido, o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:
// Até 5 km: frete fixo de R$ 5
// De 5.1 km até 20 km: R$ 0,50 por quilômetro
// Acima de 20 km: frete fixo de R$ 20
// Seu desafio é escolher o tipo de função mais adequado para resolver este problema. Função tradicional? Arrow Function? E aí? Como vai implementar esse desafio?

function calculaFrete(km) {
  if (km <= 5) {
    return 5;
  } else if (km <= 20) {
    return km * 0.5;
  } else {
    return 20;
  }
}

console.log(calculaFrete(14));

// outras opções
// Lembrando que estuturas if/else com somente uma linha de retorno também têm uma sintaxe reduzida:
// function calcularFrete(distancia) {
//   if (distancia <= 5) return 5;
//   else if (distancia <= 20) return distancia * 0.5;
//   else return 20;
// }
// console.log(calcularFrete(3));
// console.log(calcularFrete(12));
// console.log(calcularFrete(25));
// Copiar código
// Arrow function:
// const calcularFrete = (distancia) => {
//   if (distancia <= 5) {
//     return 5;
//   } else if (distancia <= 20) {
//     return distancia * 0.5;
//   } else {
//     return 20;
//   }
// };

// Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.
// Sua tarefa é criar uma função chamada processarPedido, que receba três parâmetros:
// o nome do cliente,
// o tipo do cliente (vip, novo ou comum),
// e uma função de callback responsável por exibir uma mensagem após o pedido ser processado.

const processarPedido = (nomeC, tipoC, msg) => {
  console.log("Processando pedido de", nomeC + "...");
  msg(nomeC, tipoC);
};
function mensagemPersonalizada(nome, tipo) {
  if (tipo == "comum") {
    return console.log("Obrigado pela sua compra,", nome + "!");
  } else if (tipo == "vip") {
    return console.log(
      "Obrigado pela preferência,",
      nome + "! Você ganhou frete grátis.",
    );
  } else {
    return console.log(
      "Bem-vindo(a),",
      nome + "! Aproveite um cupom de boas-vindas.",
    );
  }
}

// function processarPedido(nome, tipoCliente, callback) {
//     console.log(`Processando pedido de ${nome}...`);
//     callback(nome, tipoCliente);
// }
// function mensagemPersonalizada(nome, tipo) {
//     if (tipo === "vip") {
//         console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
//     } else if (tipo === "novo") {
//         console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
//     } else {
//         console.log(`Obrigado pela sua compra, ${nome}!`);
//     }
// }
// processarPedido("Lucas", "vip", mensagemPersonalizada);
processarPedido("Carlos", "vip", mensagemPersonalizada);

// Imagine que você está desenvolvendo uma interface de atendimento online.Quando o usuário envia uma pergunta, o sistema precisa simular que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.
// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:
// o nome do usuário, e
// uma função de callback que será executada após 3 segundos.
