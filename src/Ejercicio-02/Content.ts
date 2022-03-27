/**
 * Content es una clase abstracta de que almacenará una la información de cada elemento 
 * (Película, Serie y/o Documental).
 */
 export abstract class Content {
  private name: string;
  private genre: string;
  private year: number;

  constructor(name: string, year: number, genre: string) {
    this.name = name;
    this.genre = genre;
    this.year = year;
  }

  /**
   * Devuelve el nombre del elemento.
   * @returns {string} Nombre del elemento.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Devuelve el género del elemento.
   * @returns {string} Género del elemento.
   */

  getGenre(): string {
    return this.genre;
  }

  /**
   * Devuelve el año de estremo del elemento.
   * @returns {number} Año de estreno del elemento.
   */

  getYear(): number {
    return this.year;
  }
}