const primeNumbers = [17, 23, 37]
const [primeNumbers1, primeNumbers2, primeNumbers3] = primeNumbers
const sum = (a, b) => {
  console.log(a + b);
  console.log(a, b);
}

sum(primeNumbers1, primeNumbers3) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring