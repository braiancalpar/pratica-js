const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Bem vindo ao Quiz de JavaScript!");
console.log("Responda com a letra correta: a, b ou c\n");

let acertos = 0;

rl.question(
  "1) Qual a palavra que usamos para criar uma função?\na) Define\nb) Function\nc) Create\n>",
  (resposta1) => {
    if (resposta1 == "b") {
      acertos++;
    }
    rl.question(
      "2) Qual dessas é uma estrutura de repetição?\na) Loopar\nb) Reapeat\nc) For\n>",
      (resposta2) => {
        if (resposta2 == "c") {
          acertos++;
        }
        rl.question(
          "3) Qual valor é considerado falsy em JavaScript?\na) 1\nb) 0\nc) 'texto'\n>",
          (resposta3) => {
            if (resposta3 == "b") {
              acertos++;
            }
            if (acertos == 3) {
              console.log("Ótimo, você gabaritou!");
            } else if (acertos == 2) {
              console.log("Muito bom, continue assim");
            } else if (acertos == 1) {
              console.log("Bom, continue estudando");
            } else {
              console.log("Continue estudando e tente novamente!");
            }
            rl.close();
          },
        );
      },
    );
  },
);
