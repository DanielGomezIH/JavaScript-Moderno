//Esto se debe crear con la pababra 'new'
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  };
}

const maria = new Persona("María", 18);
const daniel = new Persona("Daniel", 20);
// console.log(maria);
maria.imprimir();
daniel.imprimir();
