// No exemplo acima, utilizamos o for/of para percorrer o iterável e retornar o valor dos elementos.

// Agora que você já sabe a diferença entre eles e como usá-los, chegou o momento de praticar.

// Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

// for(let index in names){
//     console.log(`Olá ${names[index]}`)
// }

// // Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(let index in car){
//     console.log(index, car[index])
//   }


// Desse modo, sempre que houver a necessidade de criar propriedades para o objeto, basta declarar as novas variáveis referentes às novas chaves e aos valores e chamar a função novamente, como no exemplo a seguir, em que foi criada a chave fullName.

let customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  let lastName = 'Ferreira';
  
  function addProperty(object, key, value) {
    object[key] = value;
  };
  
  addProperty(customer, newKey, lastName);
  //console.log(customer);
  
  newKey = 'fullName';
  let fullName = customer.firstName + ' ' + customer.lastName;
  
  addProperty(customer, newKey, fullName);
  console.log(customer);