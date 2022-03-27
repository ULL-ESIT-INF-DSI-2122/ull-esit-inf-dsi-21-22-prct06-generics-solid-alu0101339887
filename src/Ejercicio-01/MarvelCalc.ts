import { Fighter } from "./Fighter";
import { Marvel } from "./Marvel";

export class MarvelCalc extends Fighter {
  constructor(nombre: string, 
              ataque: number, 
              defensa: number, 
              velocidad: number, 
              HP: number,
              private marvel: Marvel) {
    super(nombre, ataque, defensa, velocidad, HP);
  }

  /**
   * Función para calcular la efectividad que tiene el primer superhéroe sobre el segundo.
   * @param poderA Primer superhéroe
   * @param poderB Segundo superhéroe
   * @returns Retornará la efectividad que tiene el primer superhéroe sobre el segundo.
   */
  efectividad (poderA: string, poderB: string): number {
    if ((poderA === 'martillo' && poderB === 'fuerza') || 
        (poderA === 'armas' && poderB === 'fuerza') || 
        (poderA === 'magia' && poderB === 'telaraña')) { 
      return 2;
    } 
    if ((poderA === 'fuerza' && poderB === 'telaraña') || 
        (poderA === 'telaraña' && poderB === 'fuerza') ||
        (poderA === 'armas' && poderB === 'telaraña') || 
        (poderA === 'telaraña' && poderB === 'armas') ||
        (poderA === 'martillo' && poderB === 'magia') || 
        (poderA === 'magia' && poderB === 'martillo')) {
      return 1;
    } 
    return 0.5;
  }

  /**
   * Función para calcular el daño que hace el superhéroe sobre su enemigo.
   * @param fighter Enemigo.
   * @returns Retornará el daño causado por el superhéroe al enemigo.
   */
  damage (fighter: Fighter): number {
    if (fighter instanceof Marvel)
      return Number((this.marvel.getExperiecia() * (this.getAtaque() / fighter.getDefensa()) * this.efectividad(this.getNombre(), fighter.getNombre())).toFixed(2));
    else
      return Number((10 * (this.getAtaque() / fighter.getDefensa())).toFixed(2));
  }
}