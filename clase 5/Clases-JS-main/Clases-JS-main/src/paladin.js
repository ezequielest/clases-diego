import { Piquero } from "./piquero";

export class Paladin extends Piquero {
  nombre = "Paladin";
  ataque = 200;
  velocidad = 50;

  constructor() {}

  atacarACaballo() {
    console.log(
      `${this.nombre} te ataca desde su cabalo a una velocidad de ${this.velocidad} y te hace ${this.ataque} de daño`
    );
  }
}
