import { Fighter } from './Fighter';

/**
 * Clase para almacenar los luchadores.
 */
export class Pokedex {
  constructor(private fighters: Fighter[]) {
  }

  /**
   * Función para añadir un nuevo luchador a la pokedex.
   * @param fighter 
   */
  add(fighter: Fighter): void {
    this.fighters.push(fighter);
  }

  /**
   * Función para obtener los luchadores que hay en la pokedex.
   * @returns Retornará una lista con todos los luchadores de la pokedex.
   */
  getFighters(): Fighter[] {
    return this.fighters;
  }
}
