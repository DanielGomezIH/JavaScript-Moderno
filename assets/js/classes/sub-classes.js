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
