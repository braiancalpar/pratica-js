//estrutura do laço de repetição FOR
for (let contador = 1; contador <= 10; contador++) {
  console.log("Número atual:", contador);
}

for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 == 0) {
    console.log("Número par encontrado", numero);
  }
}

for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 > 0) {
    console.log("Número impar encontrado", numero);
  }
}

// palavra.length indica quantos caracteres uma string possui
// palavra[1] - pega a letra na posição indicada = [0][1][2][3][4][5]....
const palavra = "Ele é um radiante";

for (let cont = 0; cont < palavra.length; cont++) {
  console.log(palavra[cont]);
}
