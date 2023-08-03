/**
 * Días de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si está abierto hoy

const dia = 1; //0: domingo 1:Lunes 2:Martes ...
const horaActual = 10;

let horaApertura;
let mensaje; //Está abierto, Está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
//   console.log("Fin de semana");
//   horaApertura = 9;
// } else {
//   console.log("Entre semana");
//   horaApertura = 11;
// }

//Operador Ternario

horaApertura = [0, 6].includes(dia) ? 9 : 11;

// if (horaActual >= horaApertura) {
//   mensaje = "Está abierto";
// } else {
//   mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

//Operador Ternario

mensaje =
  horaActual >= horaApertura
    ? "Está Abierto"
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
