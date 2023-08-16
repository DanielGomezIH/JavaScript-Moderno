class Persona {
  //Declarar las propiedades aquí es opcional
  static _conteo = 0;
  static get getConteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log("Hola, soy un método estático");
  }

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

    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getcomidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice "${this.frase}"`);
  }
}

class Heroe extends Persona {
  clan = "Sin Clan";

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);

    this.clan = "The Avengers";
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy();
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spiderman",
  "Soy tu vecino spiderman"
);

// const spiderman = new Heroe();

console.log(spiderman);
spiderman.quienSoy();
