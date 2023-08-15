class Persona {
  //Declarar las propiedades aquí es opcional
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin código",
    frase = "Sin frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getcomidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidas es ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice "${this.frase}"`);
  }
}

const spiderman = new Persona(
  "Peter Parker",
  "Spiderman",
  "Soy tu vecino spiderman"
);

const ironman = new Persona("Tony Stark", "Ironman", "Yo soy Ironman");

spiderman.miFrase();

spiderman.setComidaFavorita = "Pastel de Cereza";

console.log(spiderman.getcomidaFavorita);

console.log(spiderman);
