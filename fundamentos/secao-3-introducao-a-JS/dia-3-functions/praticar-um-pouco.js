/*Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

Adicione um valor ao saldo.
Subtraia um valor do saldo.
Multiplique o valor do saldo por uma taxa.
Divida o valor do saldo. */



function bank(saldo){
    saldo = (saldo + 250 - 100) * (saldo * 0.01) / 2
    return saldo
}

console.log(bank(1500))