//const readline = require("readline");
import { createInterface } from "readline";
import {
  resto,
  potenciacao,
  divisao,
  multiplicacao,
  soma,
  subtracao,
} from "./operacoesMatematicas.js";

const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Digite o primeiro número:\n", (numero1) => {
  leitor.question(
    "Qual a operação:\n+: soma\n-: subtração\n*: multiplicação\n/: divisão\n**: potenciação\n%: resto\n>",
    (operacao) => {
      leitor.question("Digite o segundo número:\n", (numero2) => {
        const num1 = Number(numero1);
        const num2 = Number(numero2);

        let resultado = null;

        if (operacao == "+") {
          resultado = soma(numero1, numero2);
        } else if (operacao == "-") {
          resultado = subtracao(numero1, numero2);
        } else if (operacao == "*") {
          resultado = multiplicacao(numero1, numero2);
        } else if (operacao == "/") {
          resultado = divisao(numero1, numero2);
        } else if (operacao == "**") {
          resultado = potenciacao(numero1, numero2);
        } else if (operacao == "%") {
          resultado = resto(numero1, numero2);
        } else {
          console.log("Operação inválida!");
        }
        if (resultado != null) {
          console.log("O resultado da operação é: ", resultado);
        }
        leitor.close();
      });
    },
  );
});
