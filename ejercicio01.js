/*
Ejercicio 1:

Calcula cuantas horas le lleva llegar a la luna a una nave espacial y
guardar el resuiltado en una variable.

La distancia desde la tierra hasta la luna es de 384.400 kilomtros.

La velocidad de la nave es de 1225 kilometros por hora.
*/

let distancia_tierra_luna = 384.400;
let velocidad_nave = 1225;

let tiempoEnHoras = distancia_tierra_luna / velocidad_nave;

let resultado = `La nave tardará aproximadamente ${tiempoEnHoras.toFixed(2)} horas en llegar a la Luna.`;

console.log(resultado);