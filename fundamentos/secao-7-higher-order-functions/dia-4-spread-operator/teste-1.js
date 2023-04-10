// Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'mamão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['chocolate', 'leite condensado', 'açucar'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));