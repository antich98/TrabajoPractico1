let num1 = parseInt(prompt(`Ingrese un número divisible por 2, 3, 5 o 7`));
if (!isNaN(num1) === true){

    if (num1 % 2 === 0) {
      document.write(`El número es divisible`);
    } else if (num1 % 3 === 0) {
        document.write(`El número es divisible`)
    } else if (num1 % 5 === 0) {
        document.write(`El número es divisible`)
    } else if (num1 % 7 === 0) {
        document.write(`El número es divisible`)
    }
    else {
      document.write(`El número no es divisible por 2, 3, 5 o 7`);
    }

  } else {
    document.write(`Ingresaste un dato no válido.`);
  }