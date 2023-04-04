const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const prodPrice = (produ, price) => produ.map((element, index) => 
    {[element]: price[index]}
)

console.log(prodPrice(products, prices))


