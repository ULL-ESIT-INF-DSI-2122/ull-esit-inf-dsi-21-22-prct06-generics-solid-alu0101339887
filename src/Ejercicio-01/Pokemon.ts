/**
 * Clase para definir la información de cada pokémon.
 */
export class Pokemon {
  constructor(private peso: number, private altura: number, private tipo: string) {}

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
}
