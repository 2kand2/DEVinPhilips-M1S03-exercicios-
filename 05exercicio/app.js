function somaTudo(...valores) {
  let total = 0;

  for (let i of valores) {
    total += parseInt(i, 10);
  }
  return total;
}

const resultado = somaTudo(1, 2, 3, 4);

console.log(resultado);
