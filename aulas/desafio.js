console.log("Boas-vindas à calculadora de troco!");
let valorCompra = 27.5;
let valorPago = 50;
console.log("Valor da compra: R$", valorCompra);
console.log("Valor recebido: R$", valorPago);

// let troco = valorPago - valorCompra;
let troco = valorPago % valorCompra;

console.log("O troco será: R$", troco);
