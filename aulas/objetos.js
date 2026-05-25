const pessoa = {
  nome: "Ana",
  idade: 26,
  temCNH: true,
};

pessoa.sobrenome = "Paula";
// console.log("Nome:", pessoa.nome);
// console.log("Sobrenome:", pessoa.sobrenome);

const livro = {
  titulo: "Sacramentadora",
  autor: "Brandon Sanderson",
  paginas: 1536,
};

livro.publicado = true;
livro.publicacao = 2017;
livro.idiomas = ["inglês", "português", "espanhol", "alemão", "japonês"];
console.log("Titulo do livro:", livro.titulo);
console.log("Autor do livro:", livro.autor);
console.log("Data de publicação do livro:", livro.publicacao);

livro.idiomas.push("mandarin");
livro.idiomas.push("francês");

console.log("Livro antes:", livro);

delete livro.publicado;

console.log("Livro depois:", livro);

console.log("Autor:", livro["autor"]);
console.log("Editora:", livro["editora"]);

const autor = {
  nome: "Brandon Sanderson",
  nacionalidade: "Estadunidense",
  idade: 50,
  livros: [livro],
};

console.log("Autor:", autor);

livro.autor = autor;

console.log("Livro depois das mod:", livro);

livro.autor.nome;
livro.autor.nacionalidade;
