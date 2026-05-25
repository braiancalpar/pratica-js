const idade = 17;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorDeIdade && possuiCNH; // AND

console.log("Pode dirigir? ", podeDirigir);

const podeViajarSozinha = maiorDeIdade || possuiCNH // OR

console.log("Pode viajar sozinha? ", podeViajarSozinha);

const precisaDeAcompanhante = !maiorDeIdade // NOT

console.log("Precisa de acompanhante? ", precisaDeAcompanhante);

// AND &&
// OR ||
// NOT !