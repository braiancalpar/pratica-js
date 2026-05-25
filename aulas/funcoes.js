// function saudacao(nome) {
//   //nome é um parametro da função saudacao
//   console.log("Olá,", nome);
// }

// const saudacao = (nome) => {
//   console.log("Vida antes da morte,", nome);
// };

const saudacao = (nome) => console.log("Olá,", nome);

saudacao("Kaladin"); //kaladin é o "argumento"
// saudacao("Jasnah");
// saudacao("Hoid");

// function calcularDobroDeUm(numero) {
//   return numero * 2;
// }

// const calcularDobroDeUm = (numero) => {
//   return numero * 2;
// };

const calcularDobroDeUm = (numero) => numero * 2;

const numeroDobrado = calcularDobroDeUm(4);
console.log("O dobro de 4 é", numeroDobrado);
