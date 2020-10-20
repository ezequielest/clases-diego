import { Maquinaria } from "./maquinaria";

export class Catapulta extends Maquinaria {
  nombre = "Catapulta";

  constructor() {}

  alerta() {
    if(this.material === "Madera") {
      console.log(`Cuidado, el fuego la puede quemar`);
    }
  }
}