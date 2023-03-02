//Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.
let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
};

// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e concatene as informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

player["bestInTheWorld"] = [1900, 1980, 2000, 2010, 2011, 2300];
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade
Foi a melhor do mundo em ${player["bestInTheWorld"]}`);

// Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo.

