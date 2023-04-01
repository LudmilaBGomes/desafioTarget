
function fibonacci(limite) {
    let numeros = [0, 1];
    while (numeros[numeros.length - 1] < limite) {
        let proximo = numeros[numeros.length - 1] + numeros[numeros.length - 2];
        if (proximo === limite) {
            return `O número ${limite} pertence a sequência de Fibonacci`
        }
        numeros.push(proximo);

    }
    return `O número ${limite} não pertence a sequência de Fibonacci`
}

console.log(fibonacci(1256))



