//resposta
function concatena(array1, array2) {
  return [...array1, ...array2];
}

const novoArray = concatena([1, 2, 3], [4, 5, 6]);

console.log(novoArray);

// versão arrow
// const novoArray = (array1, array2) => {
//   return [...array1, ...array2];
// };
