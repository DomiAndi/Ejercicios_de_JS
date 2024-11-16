/*
Ejercicio 10:

El otro dia fui con mi amigo Pepe y Manolo a un restaurante de smash burguers.

Yo me comi 2, pepe se comio 3 y Manolo, como es culturista, se comio 6.

¿Cuantas hamburguesas nos comimos en total?

Y... ¿Es cierto que yo comi menos que Pepe?

Responde a estas dos preguntas devolviendo el resultado en la consola del navegador.
*/

let hamburguesasYo = 2;
let hamburguesasPepe = 3;
let hamburguesasManolo = 6;

let totalHamburguesas = hamburguesasYo + hamburguesasPepe + hamburguesasManolo;

let comiMenosQuePepe = hamburguesasYo < hamburguesasPepe;

console.log(`En total nos comimos ${totalHamburguesas} hamburguesas.`);
console.log(`Es cierto que comí menos que Pepe? ${comiMenosQuePepe}`);