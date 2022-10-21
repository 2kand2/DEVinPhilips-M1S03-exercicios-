const user = {
  firstName: "Octaciano",
  age: 20,
  job: "Software Developer jr",
};

function retornaMensagem(user) {
  const { firstName, age, job } = user;
  return `Este é ${firstName}, tem ${age} anos e é ${job}.`;
}

console.log(retornaMensagem(user));
