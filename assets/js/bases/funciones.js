function saludar(nombre) {
  // console.log(arguments);
  // console.log("Hola " + nombre);
  return [1, 2];

  //Esto nunca se va a ejecutar
  console.log("Soy un código que está después del return");
}

const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};

const saludarFlecha = (nombre) => {
  console.log("Hola " + nombre);
};

const retornoDesSaludar = saludar("Daniel", 19, false, "Colombia");

// saludar2("Juan");
// saludarFlecha("Flecha");

function sumar(a, b) {
  return a + b;
}

// console.log(sumar(3, 6));

const sumar2 = (a, b) => {
  return a + b;
};

// console.log(sumar2(3, 10));

const sumar3 = (a, b) => a + b;

// console.log(sumar3(3, 10));

function getAleatorio() {
  return Math.random();
}

// console.log(getAleatorio());

const getAleatorio2 = () => Math.random();

// console.log(getAleatorio2());
