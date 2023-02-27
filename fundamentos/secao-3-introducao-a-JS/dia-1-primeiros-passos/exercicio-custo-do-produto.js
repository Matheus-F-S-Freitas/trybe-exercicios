let custo = 35
let venda = 50
let imposto = (custo + (custo * 0.2)) * 1000
let lucro = (venda * 1000) - imposto 

if (lucro < 0){
    console.log("erro")
}
else {
    console.log("Esse foi seu lucro: R$" + lucro)
}