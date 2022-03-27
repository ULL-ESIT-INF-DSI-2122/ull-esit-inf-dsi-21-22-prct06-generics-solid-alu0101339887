import { Content } from "./Content"

/**
 * Series es una clase heredada de Content que almacenará la información de
 * cada serie.
 */
export class Series extends Content {
  private capNumber: number;

  constructor(name: string, year: number, genre: string, capNumber: number) {
    super(name, year, genre);
    this.capNumber = capNumber;
  }

  /**
   * Devuelve el número de capítulos que tiene la serie.
   * @returns {number} Número de capítulos.
   */
  getCapNumber(): number {
    return this.capNumber;
  }
}