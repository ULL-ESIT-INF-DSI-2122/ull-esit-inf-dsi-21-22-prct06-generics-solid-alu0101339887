import { Fighter } from "./Fighter";
import { Destiny } from "./Destiny";

export class DestinyCalc extends Fighter {
  constructor(nombre: string, 
              ataque: number, 
              defensa: number, 
              velocidad: number, 
              HP: number,
              private destiny: Destiny) {
    super(nombre, ataque, defensa, velocidad, HP);
  }

  /**
   * Función para calcular la efectividad que tiene el primer soldado sobre el segundo.
   * @param naturalezaA Naturaleza del primer soldado.
   * @param naturalezaB naturaleza del segundo soldado.
   * @returns Retornará la efectividad que tiene el primer soldado sobre el segundo.
   */
  efectividad (naturalezaA: string, naturalezaB: string): number {
    if ((naturalezaA === 'mago' && naturalezaB === 'tanque') || 
        (naturalezaA === 'ágil' && naturalezaB === 'mago')) { 
      return 2;
    } 
    if ((naturalezaA === 'tanque' && naturalezaB === 'ágil') || 
        (naturalezaA === 'ágil' && naturalezaB === 'tanque')) {
      return 1;
    } 
    return 0.5;
  }

  /**
   * Función para calcular el daño que hace el soldado sobre su enemigo.
   * @param fighter Enemigo.
   * @returns Retornará el daño causado por el soldado al enemigo.
   */
  damage (fighter: Fighter): number {
    if (fighter instanceof Destiny) 
      return Number((this.destiny.getAtaqueEspecial() * (this.getAtaque() / fighter.getDefensa()) * this.efectividad(this.getNombre(), fighter.getNombre())).toFixed(2));
    else
      return Number((10 * (this.getAtaque() / fighter.getDefensa())).toFixed(2));
  }
}