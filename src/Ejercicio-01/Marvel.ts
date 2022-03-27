import { Fighter } from "./Fighter";
/**
 * Clase para definir la información de cada superhéroe.
 */
export class Marvel {
  constructor(private experiecia: number, private poder: string) {}

  /**
   * Función que devuelve el poder del superhéroe.
   * @returns Retornará el poder del superhéroe.
   */
  getPoder(): string {
    return this.poder;
  }

  /**
   * Función que devuelve el experiecia del superhéroe.
   * @returns Retornará el experiecia del superhéroe.
   */
  getExperiecia(): number {
    return this.experiecia;
  }
}
