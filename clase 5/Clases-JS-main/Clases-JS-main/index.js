import { Humano } from "./src/humano";
import { Aldeano } from "./src/aldeano";
import { Piquero } from "./src/piquero";
import { Paladin } from "./src/paladin";
import { Maquinaria } from "./src/maquinaria";
import { Catapulta } from "./src/catapulta";

let humano = new Humano();
humano.atacar();

let aldeano = new Aldeano();
aldeano.trabajar();

let piquero = new Piquero();
piquero.lanzarLanza();

let paladin = new Paladin();
paladin.atacarACaballo();

let maquinaria = new Maquinaria("Madera");
maquinaria.fabricacion();

let catapulta = new Catapulta("Madera");
catapulta.alerta();

// 1 No puedo verlo en consola.
// 2 Maquinaria ¿Necesita el argumento?
// 3 Catapulta ¿Necesita el argumento?
// 4 ¿Como muestro todos los atributos y metodos de cada clase? ... algo de "prop"?