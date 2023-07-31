let a = 10;
let b = a;

console.log({ a, b });

let juan = { nombre: "Juan" };
let ana = { ...juan };
ana.nombre = "Ana";

console.log({ juan, ana });

const cambiarNombre = ({ ...persona }) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiarNombre(peter);

console.log({ peter, tony });

// Arreglos

const frutas = ["Manzana", "Pera", "Piña"];

const otrasFrutas = frutas.slice();

otrasFrutas.push("Mango");

console.table({ frutas, otrasFrutas });
