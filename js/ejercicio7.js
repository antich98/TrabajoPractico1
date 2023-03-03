let num1 = parseInt(prompt('Escriba un numero.'))
let num2 = parseInt(prompt('Escriba un numero.'))
let num3 = parseInt(prompt('Escriba un numero.'))
if (num1>num2 && num1>num3) {
    document.write(`El numero mayor es ${num1}.`)
}
else if (num2>num1 && num2>num3) {
    document.write(`El numero mayor es ${num2}.`)
}
else if (num3>num1 && num3>num2) {
    document.write(`El numero mayor es ${num3}.`)
}
else if(num1===num2 && num1===num3) {
    document.write('Los numeros son iguales.')
}
else if(num1===num2 && num1>num3){
    document.write('Los primeros 2 números son los mayores.')
}
else if(num1===num3 && num1>num2){
    document.write(`El primer y tercer número son los mayores.`)
}
else if(num2===num3 && num2>num1){
    document.write(`El segundo y tercer número son los mayores.`)
}
else{
    document.write('Introdujo un dato invalido.')
}
