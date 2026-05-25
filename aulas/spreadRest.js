let kaladin1 = {
  nome: "Kaladin",
  idade: 21,
  profissao: "Radiante",
};

const kaladin2 = { ...kaladin1 };

kaladin2.idade = 24;

console.log(kaladin1);
console.log(kaladin2);

kaladin1 = { ...kaladin2, profissao: "Arauto", possuiCNH: true };
console.log(kaladin1);

const { nome, ...restante } = kaladin1;

console.log(nome);
console.log(restante);
