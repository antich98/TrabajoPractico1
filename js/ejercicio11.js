let num1 = parseInt(prompt(`Ingrese un número divisible por 2, 3, 5 o 7`));
if (!isNaN(num1) === true) {
  if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0) {
    if (num1 % 2 === 0) {
      document.write(" Es divisible por 2.<br>");
    }
    if (num1 % 3 === 0) {
      document.write(" Es divisible por 3.<br>");
    }
    if (num1 % 5 === 0) {
      document.write(" Es divisible por 5.<br>");
    }
    if (num1 % 7 === 0) {
      document.write(" Es divisible por 7.<br>");
    }
  } else {
    document.write("No es divisible por 2, 3 ,5 o 7");
  }
} else {
  document.write(`Ingresaste un dato no válido.`);
}