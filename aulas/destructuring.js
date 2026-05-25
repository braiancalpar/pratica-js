const pessoa = {
  nome: "Nathália",
  idade: 17,
  profissao: "Estudante",
};

// console.log(pessoa.nome);
// console.log(pessoa.idade);

const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

// function saudacao(pessoa) {
//   console.log("Olá,", pessoa.nome);
// }

// saudacao(pessoa);

// destructuring
function saudacao({ nome, idade }) {
  console.log("Olá,", nome);
  if (idade > 18) {
    console.log("maior de idade");
  }
}

saudacao(pessoa);

const frutas = ["uva", "Banana"];

const [primeira, segunda] = frutas;

//const primeira = frutas[0]
//const segunda = frutas[0]
