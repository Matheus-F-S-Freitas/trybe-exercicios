function bank(saldo){
    saldo = (saldo + 250 - 100) * (saldo * 0.01)
    return saldo
}

console.log(bank(1500))