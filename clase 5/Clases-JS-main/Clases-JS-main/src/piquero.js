export class Piquero extends Aldeano {
  nombre = "Piquero";
  ataque = 100;
  defenza = 70;

  constructor() {}

  lanzarLanza() {
    console.log(
      `${this.nombre} te ataca con su lana y hace ${this.ataque} de daño`
    );
  }
}
