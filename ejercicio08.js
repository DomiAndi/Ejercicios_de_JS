/*
Ejercicio 8:

Tengo una heladeria y cada bola de helado vale 1.8 euros.

¿Cuanto cuestan los cucruchos de 1, 2 y 3 bolas?

Ten en cuenta que el barquillo cuesta cincuenta centimos de euros.

*/

const precioBola = 1.8; 
const precioBarquillo = 0.5; 

let precioCono1Bola = precioBarquillo + precioBola;
let precioCono2Bolas = precioBarquillo + (precioBola * 2);
let precioCono3Bolas = precioBarquillo + (precioBola * 3);

console.log(`El precio del cono con 1 bola es ${precioCono1Bola.toFixed(2)} euros.`);
console.log(`El precio del cono con 2 bolas es ${precioCono2Bolas.toFixed(2)} euros.`);
console.log(`El precio del cono con 3 bolas es ${precioCono3Bolas.toFixed(2)} euros.`);