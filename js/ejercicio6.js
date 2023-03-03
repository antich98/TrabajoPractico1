let num1 = parseInt(prompt('Ingrese un numero'))
let num2 = parseInt(prompt('Ingrese un numero'))
if (num1>num2) {
    document.write(`El numero mayor es ${num1}`)
}
else if (num2>num1) {
    document.write(`El numero mayor es ${num2}`)
}
else if (num1===num2) {
    document.write('Los numeros son iguales')
}
else {
    document.write('Informacion invalida')
}