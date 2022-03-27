import { Fighter } from './Fighter';

/**
 * Clase para almacenar los pokémon.
 */
export class Pokedex {
  constructor(private fighters: Fighter[]) {
  }

  /**
   * Función para añadir un nuevo pokémon a la pokedex.
   * @param fighter 
   */
  add(fighter: Fighter): void {
    this.fighters.push(fighter);
  }

  /**
   * Función para obtener los pokémon que hay en la pokedex.
   * @returns Retornará una lista con todos los pokémon de la pokedex.
   */
  getFighters(): Fighter[] {
    return this.fighters;
  }
}
