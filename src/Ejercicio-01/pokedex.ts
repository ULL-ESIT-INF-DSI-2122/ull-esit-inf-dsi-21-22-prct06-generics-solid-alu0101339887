import {Pokemon} from './pokemon';

/**
 * Clase para almacenar los pokémon.
 */
export class Pokedex {
  constructor(private pokes: Pokemon[]) {
  }

  /**
   * Función para añadir un nuevo pokémon a la pokedex.
   * @param pokemon 
   */
  add(pokemon: Pokemon): void {
    this.pokes.push(pokemon);
  }

  /**
   * Función para obtener los pokémon que hay en la pokedex.
   * @returns Retornará una lista con todos los pokémon de la pokedex.
   */
  getPokes(): Pokemon[] {
    return this.pokes;
  }
}
