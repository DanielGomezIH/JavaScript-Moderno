const personaje = {
  nombre: "Tony Stark",
  codeName: "Iron Man",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: {
    zip: "10880,90265",
    ubicacion: "Malibu, California",
  },
  ultimaPelicula: "Infinity War",
};

console.log(personaje);
console.log("Nombre", personaje.nombre);
console.log("Nombre", personaje["nombre"]);
console.log("edad", personaje.edad);

console.log("Coors", personaje.coords);
console.log("Coors", personaje.coords.lat);

console.log("No. Trajes", personaje.trajes.length);
console.log("Último Traje:", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("Vivo", personaje[x]);

//Más detalles.

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 10000000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });
