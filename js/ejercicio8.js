let num1 = parseInt(prompt(`Ingrese un número entero`));

if (!isNaN(num1) === true){
  if (num1 % 2 === 0) {
    document.write(`El número si es divisible por 2`);
  } else if (num1 % 2 != 0) {
    document.write(`El número no es divisible por 2`);
  }
} else {
  document.write(`Ingresaste un dato no válido.`);
}