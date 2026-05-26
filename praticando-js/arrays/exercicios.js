// ARRAY
// pratique construindo arrays e acessando seus elementos através dos índices

//      const arr = [1, 2, 3, 4];

//      console.log(arr[0]);
//      console.log(arr[1]);
//      console.log(arr[2]);
//      console.log(arr[3]);

//      arr[5] = 10;

//      delete arr[4];

//      delete arr[5];

//      console.log(arr);

// criar um array com uma sequência de números entre x e y

function criarArrNum(inicio, fim) {
  const arr = [];
  let elemento = inicio;

  for (let i = 0, j = 0; j < fim; i++, elemento++) {
    arr[i] = elemento;
    j = elemento;
  }
  return arr;
}

console.log(criarArrNum(124, 230));

// MÉTODOS

// clonar array multidimensional com "deep copy"
// por que não podemos clonar arrays via variável?

const arr1 = [[1, 2], 2, 3];

const copiaArray = (array) => {
  const copia = [];
  array.forEach((elem) => {
    if (Array.isArray(elem)) {
      copia.push(copiaArray(elem));
    } else {
      copia.push(elem);
    }
  });
  return copia;
};

const arr2 = copiaArray(arr1);
arr1[0][0] = 5;

console.log(arr1);
console.log(arr2);

// filtrar um array e alterar valores específicos
// ex: alterar números para strings

const cpfs = [
  "12323434545",
  "34658756786",
  43254365434,
  "76547865345",
  56768767564,
];

const result = cpfs.map((cpf) =>
  typeof cpf === "string" ? cpf : cpf.toString(),
);
console.log(result);
