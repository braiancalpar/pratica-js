// contar quantos números pares e impares nós temos entre 0 e 100

let totalNumerosPares = 0;
let totalNumerosImpares = 0;

// laço de repetição

for (contador = 0; contador <= 100; contador++) {
  if (contador % 2 == 0) {
    //console.log("Número par encontrado", contador);
    totalNumerosPares++;
  } else {
    //console.log("Número impar encontrado", contador);
    totalNumerosImpares++;
  }
}
console.log("Números pares encontrados", totalNumerosPares);
console.log("Números impares encontrados", totalNumerosImpares);
