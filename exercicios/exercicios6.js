// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.

const nomes = ["Kaladin", "Shallan", "Dalinar", "Adolin", "Jasnah"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.

const frutas = ["Mamão", "Manga", "Limão", "Abacate", "Abacaxi", "Goiaba"];
frutas.push("Morango");
frutas.shift("Mamão");
console.log(frutas);

// Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.

const cidades = [
  "Castro",
  "Curitiba",
  "Paranavai",
  "Ponta Grossa",
  "São Paulo",
  "Rio de Janeiro",
];
console.log("Total de cidades:", cidades.length);

// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("Soma total dos números:", soma);

// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.

let notas = [6, 9, 4, 7];
let somaNotas = 0;

for (let nota of notas) {
  somaNotas += nota;
}
let media = somaNotas / notas.length;
if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.

const userNames = ["Moash", "Skar", "Teft", "Lopen", "Rlein"];
userNames.forEach((nome) => {
  console.log("Olá,", nome + "!");
});

// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.

const precoProduto = [19.9, 18, 9.9, 55.1];

const descontos = precoProduto.map((desconto) => {
  return desconto * 0.9;
});
console.log("Produtos com desconto de 10% aplicado", descontos);

// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.

const idades = [12, 15, 18, 25, 26, 28];
const maioridade = idades.filter((idade) => {
  return idade >= 18;
});
console.log("Os maiores de idade da lista são:", maioridade);

// Crie um array com os preços de produtos em um carrinho de compras.
// Utilize um laço for ou for...of para calcular o valor total da compra.
// Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.

const carrinho = [175, 200, 130, 160, 77, 90];
let total = 0;
const desct = 0.8;
for (const produto of carrinho) {
  total += produto;
}
console.log("Total do carrinho sem desconto:", total);
console.log("Total do carrinho com desconto:", total * desct);

// Crie dois arrays:
// um array com nomes de tarefas
// outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
// Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
// Exiba a lista de tarefas pendentes no console.

const tarefas = [
  "Tirar o lixo",
  "lavar a louça",
  "Fazer almoço",
  "Limpar o banheiro",
  "Regar as plantas",
];

const tarefasConcluidas = [true, false, true, true, false];
const tarefasNaoConcluidas = tarefas.filter((tarefa, feito) => {
  return tarefasConcluidas[feito] === false;
});
console.log("As tarefas pendentes são:", tarefasNaoConcluidas);
