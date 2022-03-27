import { Content } from "./Content"

/**
 * Movies es una clase heredada de Content que almacenará la información de
 * cada película.
 */
export class Movies extends Content {
  private type: string;

  constructor(name: string, year: number, genre: string, type: string) {
    super(name, year, genre);
    this.type = type;
  }

  /**
   * Devuelve el tipo de película.
   * @returns {string} Tipo de película (Saga, Independiente, etc)
   */
  getType(): string {
    return this.type;
  }
}