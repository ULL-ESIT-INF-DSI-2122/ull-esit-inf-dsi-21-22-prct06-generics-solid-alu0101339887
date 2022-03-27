import { Fighter } from "./Fighter";
/**
 * Clase para definir la información de cada pokémon.
 */
export class Pokemon extends Fighter {
  constructor(nombre: string, 
              ataque: number, 
              defensa: number, 
              velocidad: number, 
              HP: number,
              private peso: number, 
              private altura: number, 
              private tipo: string) {
    super(nombre, ataque, defensa, velocidad, HP);
  }

  /**
   * Función que devuelve el tipo del pokémon.
   * @returns Retornará el tipo del pokémon.
   */
  getTipo(): string {
    return this.tipo;
  }

  /**
   * Función que devuelve el peso del pokémon.
   * @returns Retornará el peso del pokémon.
   */
  getPeso(): number {
    return this.peso;
  }

  /**
   * Función que devuelve la altura del pokémon.
   * @returns Retornará la altura del pokémon.
   */
  getAltura(): number {
    return this.altura;
  }

  /**
   * Función para calcular la efectividad que tiene el primer pokémon sobre el segundo.
   * @param tipoA Primer pokémon
   * @param tipoB Segundo pokémon
   * @returns Retornará la efectividad que tiene el primer pokémon sobre el segundo.
   */
  efectividad (tipoA: string, tipoB: string): number {
    if ((tipoA === 'fuego' && tipoB === 'hierba') || 
        (tipoA === 'agua' && tipoB === 'fuego') || 
        (tipoA === 'hierba' && tipoB === 'agua')  || 
        (tipoA === 'electrico' && tipoB === 'agua')) { 
      return 2;
    } 
    if ((tipoA === 'fuego' && tipoB === 'electrico') || 
        (tipoA === 'hierba' && tipoB === 'electrico') ||
        (tipoA === 'electrico' && tipoB === 'fuego') || 
        (tipoA === 'electrico' && tipoB === 'hierba')) {
      return 1;
    } 
    return 0.5;
  }

  /**
   * Función para calcular el daño que hace el pokémon sobre su enemigo.
   * @param fighter Enemigo.
   * @returns Retornará el daño causado por el pokémon al enemigo.
   */
  damage (fighter: Fighter): number {
    if (fighter instanceof Pokemon)
      return Number((50 * (this.getAtaque() / fighter.getDefensa()) * this.efectividad(this.getNombre(), fighter.getNombre())).toFixed(2));
    else
      return Number((10 * (this.getAtaque() / fighter.getDefensa())).toFixed(2));
  }
}