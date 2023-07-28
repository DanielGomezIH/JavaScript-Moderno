// function crearPersona(nombre, apellido) {
//   return { nombre, apellido };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Daniel", "Gómez");
console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...arguments) => {
  // console.log({ edad, arguments });
  return arguments;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Daniel",
  "Hola"
);

console.log({ casado, vivo, nombre, saludo });

const personaje = {
  nombre: "Tony Stark",
  codeName: "Iron Man",
  vivo: false,
  edad: 40,
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

// Desestructuración de un Objeto

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 20, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(personaje);
