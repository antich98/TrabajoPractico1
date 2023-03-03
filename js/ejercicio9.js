let frase = prompt(`Escriba la frase: El ciudadano noble`)
let fraseReferencia = `El ciudadano noble`
if(frase === fraseReferencia){
    document.write(frase.substring(0, 1));
    document.write(frase.substring(4, 5));
    document.write(frase.substring(5, 6));
    document.write(frase.substring(7, 8));
    document.write(frase.substring(9, 10));
    document.write(frase.substring(11, 12));
    document.write(frase.substring(14, 15));
    document.write(frase.substring(17, 18));

} else{
    document.write(`No ingresaste la frase correcta. Refresca.`)
}