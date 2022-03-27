import { Fighter } from "./Fighter";
/**
 * Clase para definir la información de cada pokémon.
 */
export class DC extends Fighter {
  constructor(nombre: string, 
              ataque: number, 
              defensa: number, 
              velocidad: number, 
              HP: number,
              private naturaleza: string,
              private superPoder: string) {
    super(nombre, ataque, defensa, velocidad, HP);
  }

  /**
   * Función que devuelve el naturaleza del pokémon.
   * @returns Retornará el naturaleza del pokémon.
   */
  getNaturaleza(): string {
    return this.naturaleza;
  }

  /**
   * Función que devuelve el arma del pokémon.
   * @returns Retornará el arma del pokémon.
   */
  getSuperPoder(): string {
    return this.superPoder;
  }

  /**
   * Función para calcular la efectividad que tiene el primer pokémon sobre el segundo.
   * @param pokemonA Primer pokémon
   * @param pokemonB Segundo pokémon
   * @returns Retornará la efectividad que tiene el primer pokémon sobre el segundo.
   */
  efectividad (pokemonA: string, pokemonB: string): number {
    if ((pokemonA === 'fuego' && pokemonB === 'hierba') || 
        (pokemonA === 'agua' && pokemonB === 'fuego') || 
        (pokemonA === 'hierba' && pokemonB === 'agua')  || 
        (pokemonA === 'electrico' && pokemonB === 'agua')) { 
      return 2;
    } 
    if ((pokemonA === 'fuego' && pokemonB === 'electrico') || 
        (pokemonA === 'hierba' && pokemonB === 'electrico') ||
        (pokemonA === 'electrico' && pokemonB === 'fuego') || 
        (pokemonA === 'electrico' && pokemonB === 'hierba')) {
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
    if (fighter instanceof DC) {
      if(this.getNaturaleza() === "humano")
        return Number((10 * (this.getAtaque() / fighter.getDefensa()) * this.efectividad(this.getNombre(), fighter.getNombre())).toFixed(2));
      else
        return Number((50 * (this.getAtaque() / fighter.getDefensa()) * this.efectividad(this.getNombre(), fighter.getNombre())).toFixed(2));
    }
    else
      return Number((10 * (this.getAtaque() / fighter.getDefensa())).toFixed(2));
  }
}