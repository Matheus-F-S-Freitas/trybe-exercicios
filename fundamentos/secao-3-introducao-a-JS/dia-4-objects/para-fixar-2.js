// No exemplo acima, utilizamos o for/of para percorrer o iterável e retornar o valor dos elementos.

// Agora que você já sabe a diferença entre eles e como usá-los, chegou o momento de praticar.

// Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for(let index in names){
    console.log(`Olá ${names[index]}`)
}