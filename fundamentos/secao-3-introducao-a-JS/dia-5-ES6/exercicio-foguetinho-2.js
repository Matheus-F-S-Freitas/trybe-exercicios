// Agora, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que estudou de let, const, arrow functions, template literals e ternary operator.

// 1 – Crie uma função que ligue e desligue o motor de um carro

            // let onAndOf = (power) => {
            //     if (power === "liga"){
            //         return "ligado"
            //     }
            //     else if (power === "desliga"){
            //         return "desligado"
            //     }
            //     else {
            //         return "Diga 'liga' ou 'desliga' para ligar ou desligar seu novo Tesla!"
            //     }
            // }
            // console.log(onAndOf("dasaddas"))


//2 – Crie uma função que calcule a área de um círculo
//Sua fórmula (A = π r²)

            // let circleArea = (raid) => {
            //     let area = 3.14 * (raid ** 2);
            //     return `A área do circulo é ${area}`
            // }
            // console.log(circleArea(4))


//3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

// Exemplo:
//   longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// De olho na dica 👀: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().



/*Exemplo do MDN:

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."] */

let biggestWord = (string) => {
    let plus = "";
    let split = string.split(" ")
    for(let index of split){
        if(index.length > plus.length){
            plus = index
        }
    }
    return plus
}
console.log(biggestWord("i don't wanna lose you now"))

/*
Tem um pequeno bug, que se você escrever duas palavras com o mesmo tamanho aparece que a primeira é maior
Esse bug acontece também na solução da Trybe


const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));
*/