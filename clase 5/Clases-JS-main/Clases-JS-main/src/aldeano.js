import { Humano } from "./humano";

export class Aldeano extends Humano {
  nombre = "Aldeano";
  ataque = 50;

  constructor() {}

  trabajar() {
    console.log(`${this.nombre} trabaja muy duro`);
  }
}
