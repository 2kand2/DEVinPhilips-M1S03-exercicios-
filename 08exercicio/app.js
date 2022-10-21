var uneDobraRetorna = (...arr) => {
  let primeiro = arr[0];
  arr.shift();
  const segundo = arr.map((x) => x * 2);
  let array = [...primeiro, ...segundo];
  return array;
};

const r1 = uneDobraRetorna([1, 2, 3], 4, 4);
const r2 = uneDobraRetorna([2], 10, 4, 8);
const r3 = uneDobraRetorna([6, 8]);

console.log(r1);
console.log(r2);
console.log(r3);
