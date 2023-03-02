// //Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

// let student = {
//     name: "Matheus",
//     email: 'matheus2002fernando@gmail.com',
//     cellNumber: 12997051904,
//     github: "matheus-f-s-freitas"
// };
// for(let index in student){
//     console.log(index, student[index])
// }


// let countries = {
//     franca: 'Paris',
//     brasil: 'Brasília',
//     espanha: 'Madrid',
//     portugal: 'Lisboa',
//   };
//   let pairKeyValue = Object.entries(countries);
//   console.log(pairKeyValue);

//   for(let index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };

let object = { a: 1, b: 2, c: 3 };

for (let property in object) {
  console.log(property + ' = ' + object[property]);
}