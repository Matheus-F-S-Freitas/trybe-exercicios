/*
V Percorra o array imprimindo todos os valores contidos nele com a função console.log().

V Some todos os valores contidos no array e imprima o resultado.

V Calcule e imprima a média aritmética dos valores contidos no array.
     A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

X Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

X Utilizando for, descubra o maior valor contido no array e imprima-o.

X Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

X Utilizando for, descubra o menor valor contido no array e imprima-o.

X Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

X Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let some = 0;

for (let index = 0; index < numbers.length; index += 1){
    some += numbers[index]
    
}
let media = some / numbers.length;
if(media > 20){
    console.log("Valor maior que 20")
}
else if(media <= 20){
    console.log("Valor menor ou igual a 20")
}
