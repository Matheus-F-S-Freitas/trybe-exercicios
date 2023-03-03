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

let circleArea = (raid) => {
    let area = 3.14 * (raid ** 2);
    return `A área do circulo é ${area}`
}
console.log(circleArea(4))