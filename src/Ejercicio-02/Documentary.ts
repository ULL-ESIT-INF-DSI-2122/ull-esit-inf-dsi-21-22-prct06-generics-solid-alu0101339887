import { Content } from "./Content"

/**
 * Documentary es una clase heredada de Content que almacenará la información de
 * cada documental.
 */
export class Documentary extends Content {
  private time: number;

  constructor(name: string, year: number, genre: string, time: number) {
    super(name, year, genre);
    this.time = time;
  }

  /**
   * Devuelve el tiempo que dura el documental.
   * @returns {number} Tiempo que dura el documental.
   */
  getTime() {
    return this.time;
  }
}