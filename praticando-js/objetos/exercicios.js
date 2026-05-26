// OBJETOS

// crie um objeto 'pessoa' como jogadora em uma plataforma de games e adicione algumas caracteristicas como propriedades.

const pessoa = {
  nome: "Roberta R.",
  nascimento: "2020-01-01",
  cpf: "23445667889",
  pontuacao: 4576,
  trofeus: ["speedrunner", "indie"],
};

// imprima no terminal o nome da pessoa e um dos troféus.
console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);

// exclua uma propriedade do objeto.

delete pessoa.cpf;
console.log(pessoa);

// criar uma função para iterar os troféus

function exibeTrofeus(listaTrofeus) {
  for (const trofeu of listaTrofeus) {
    console.log(`Tem o troféu ${trofeu}`);
  }
}

exibeTrofeus(pessoa.trofeus);

// Adicione ao objeto um método para calcular a idade da pessoa e retornar o valor no terminal com string

const user = {
  nome: "Roberta R",
  nascimento: "1996-01-01",
  cpf: "23445667889",
  pontuacao: 4576,
  trofeus: ["speedrunner", "indie"],
};

user.calculaIdade = function calculaIdade() {
  const anoNasc = parseInt(this.nascimento.slice(0, 4));
  const idade = new Date().getFullYear() - anoNasc;
  console.log(`A idade é ${idade}`);
};

user.calculaIdade();

// acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.

const clientes = [
  {
    nome: "Marina M",
    ativo: true,
  },
  {
    nome: "Rafael R",
    ativo: false,
  },
  {
    nome: "Fabio F",
    ativo: false,
  },
];

for (const cliente of clientes) {
  const status = cliente.ativo ? "Ativo" : "Inativo";
  console.log(`Status do cliente ${cliente.nome}: ${status}`);
}
