function verificaPalindromo(palavra) {
  let palavraFormatada = palavra
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f-\s]/g, "");
  console.log(palavraFormatada);
  let palavraInvertida = palavraFormatada.split("").reverse().join("");

  console.log(palavraInvertida);
  return palavraInvertida === palavraFormatada;
}

const teste1 = "A rita sobre vovô verbos atira";

console.log(verificaPalindromo(teste1));

// const palindromo = (palavra) => {
//   let palavraFormatada = palavra
//     .toLowerCase()
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f-\s]/g, "");
//   console.log(palavraFormatada);
//   let palavraInvertida = palavraFormatada.split("").reverse().join("");
//   return palavraInvertida === palavraFormatada;
// };

// console.log(palindromo("Ana"));
