import { Fighter } from "./Fighter";
/**
 * Clase para definir la información de cada pokémon.
 */
export class Marvel extends Fighter {
  constructor(nombre: string, 
              ataque: number, 
              defensa: number, 
              velocidad: number, 
              HP: number,
              private experiecia: number, 
              private poder: string) {
    super(nombre, ataque, defensa, velocidad, HP);
  }

  /**
   * Función que devuelve el poder del pokémon.
   * @returns Retornará el poder del pokémon.
   */
  getPoder(): string {
    return this.poder;
  }

  /**
   * Función que devuelve el experiecia del pokémon.
   * @returns Retornará el experiecia del pokémon.
   */
  getExperiecia(): number {
    return this.experiecia;
  }

  /**
   * Función para calcular la efectividad que tiene el primer pokémon sobre el segundo.
   * @param poderA Primer pokémon
   * @param poderB Segundo pokémon
   * @returns Retornará la efectividad que tiene el primer pokémon sobre el segundo.
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
   * Función para calcular el daño que hace el pokémon sobre su enemigo.
   * @param fighter Enemigo.
   * @returns Retornará el daño causado por el pokémon al enemigo.
   */
  damage (fighter: Fighter): number {
    if (fighter instanceof Marvel)
      return Number((this.getExperiecia() * (this.getAtaque() / fighter.getDefensa()) * this.efectividad(this.getNombre(), fighter.getNombre())).toFixed(2));
    else
      return Number((10 * (this.getAtaque() / fighter.getDefensa())).toFixed(2));
  }
}