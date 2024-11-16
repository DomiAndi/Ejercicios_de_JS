/*
Ejercicio 6:

En mi tienda de videojuegos tenemos una oferta.

Si compras un juego de 50 euros o mas, te hacemos un 20% de descuento

Si un cliente compra el Tekken 15 que cuesta 50 euros ¿en cuanto se le queda?

*/

let precio_juego = 50;
let descuento = precio_juego * 0.2;

let precio_final = precio_juego - descuento;

console.log(`El precio de Tekken 15 tras aplicar el descuento es de: ${precio_final} euros.`);