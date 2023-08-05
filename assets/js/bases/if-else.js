let a = 9;

if (a >= 10) {
  console.log("A es mayor o igual a 10");
} else {
  console.log("A es menor a 10");
}

const hoy = new Date();

let dia = hoy.getDay();

console.log({ dia });

if (dia === 0) {
  console.log("Domingo");
} else if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else {
  console.log("No es Lunes, Martes o Domingo");
}

// console.log("Fin del programa");

// Sin usar If Else, o switch, únicamente objetos.
// Imprimir Dia de la semana
dia = 10;

const diaLetras = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

console.log(diaLetras[dia] || "Día no definido");
