/*
V Percorra o array imprimindo todos os valores contidos nele com a função console.log().

V Some todos os valores contidos no array e imprima o resultado.

V Calcule e imprima a média aritmética dos valores contidos no array.
     A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

V Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

V Utilizando for, descubra o maior valor contido no array e imprima-o.

V *Conseguir com ajuda do gabarito* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

V *Consegui utilizando o gabarito* Utilizando for, descubra o menor valor contido no array e imprima-o.

V Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

V Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

*/

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let empty = [];

for (let index = 1; index <= 25; index += 1) {
    empty.push(index / 2)
}
console.log(empty)
