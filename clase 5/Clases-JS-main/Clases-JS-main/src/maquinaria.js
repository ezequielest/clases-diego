export class Maquinaria {
  nombre = "";
  vida = 1000;
  material = "";

  constructor(material) {
    this.material = material;
  }

  fabricacion() {
    console.log(`Este artefacto esta hecho de ${this.material}`);
  }
}
