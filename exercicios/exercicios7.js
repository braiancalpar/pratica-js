// 1. Criando um objeto pessoal
// Crie um objeto com seu nome, idade e profissão.
const pessoa = {
  nome: "Kaladin",
  idade: 21,
  profissao: "Radiante",
};

// 2. Acessando propriedades
// Acesse e exiba o valor da propriedade "nome" no console.
console.log("Nome:", pessoa.nome);

// 3. Atualizando valores
// Modifique a propriedade "idade" com um novo valor.
pessoa.idade = 22;
console.log("Nova idade:", pessoa.idade);

// 4. Adicionando uma nova propriedade
// Adicione ao objeto uma nova propriedade chamada "cidade".
pessoa.cidade = "Urithiru";
console.log("Cidade adicionada:", pessoa.cidade);

// 5. Função com objeto
// Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
// A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.
function dados(p) {
  return (
    "Olá! Meu nome é " +
    p.nome +
    ", tenho " +
    p.idade +
    " anos e sou um " +
    p.profissao +
    "."
  );
}
console.log(dados(pessoa));

// 6. Lista de pessoas
// Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.
const pessoa2 = {
  nome: "Shallan",
  idade: 19,
  profissao: "Radiante",
};
const pessoa3 = {
  nome: "Adolin",
  idade: 23,
  profissao: "Fractário",
};
const pessoa4 = {
  nome: "Lift",
  idade: 14,
  profissao: "Radiante",
};
const pessoas = [pessoa, pessoa2, pessoa3, pessoa4];
console.log(pessoas);

// 7. Filtrando maiores de idade
// Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.
for (const p of pessoas) {
  if (p.idade >= 18) {
    console.log(p.nome, "é maior de idade");
  }
}

// 8. Objeto com método
// Crie um objeto chamado usuario com as propriedades nome e saudacao.
// A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa, utilizando o nome armazenado no objeto por acesso direto à propriedade.
const usuario = {
  nome: "Lopen",
  saudacao: function () {
    console.log("Olá, eu sou", usuario.nome);
  },
};
usuario.saudacao();
// 9. Listando propriedades com for...in
// Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício
for (let chave in pessoa) {
  console.log("Chave", chave);
  console.log("Valor", pessoa[chave]);
}

// 10. Cálculo de compra
// Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).
const produto = {
  preco: 120,
  quantidade: 100,
};
const valorTotal = produto.preco * produto.quantidade;
console.log("Valor total de compra do produto:", valorTotal);
