// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function newClients(name){
    if(typeof name !== "string"){
        return "Erro, insira um nome"
    }
    else {
        clientesTrybeBank.push(name)
    }
}
newClients('julia')
console.log(clientesTrybeBank)