// resposta
function procuraMinMax(arr) {
  let msg = "Não é possível encontrar";
  // verifica se é array
  if (Array.isArray(arr)) {
    //verifica se possui indice
    if (arr.length > 0) {
      let elementos = arr.sort();
      //verifica se é possícel comparar
      return elementos[elementos.length - 1] == elementos[0]
        ? msg
        : "O elemento de maior valor é: " + elementos[elementos.length - 1] + " e o de manor valor é: " + elementos[0];
    } else {
      return msg;
    }
  } else {
    return msg;
  }
}

// com arrow function
const minimoMaximo = (arr) => {
  let msg = "Não é possível encontrar";
  // verifica se é array
  if (Array.isArray(arr)) {
    //verifica se possui indice
    if (arr.length > 0) {
      let elementos = arr.sort();
      //verifica se é possícel comparar
      return elementos[elementos.length - 1] == elementos[0]
        ? msg
        : "O elemento de maior valor é: " + elementos[elementos.length - 1] + " e o de manor valor é: " + elementos[0];
    } else {
      return msg;
    }
  } else {
    return msg;
  }
};
