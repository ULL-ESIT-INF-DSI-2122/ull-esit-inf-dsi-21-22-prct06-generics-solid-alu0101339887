/**
 * Clase para definir la información de cada soldado.
 */
export class Destiny {
  constructor(private naturaleza: string, private ataqueEspecial: number) {}

  /**
   * Función que devuelve el naturaleza del soldado.
   * @returns Retornará el naturaleza del soldado.
   */
  getNaturaleza(): string {
    return this.naturaleza;
  }

  /**
   * Función que devuelve el arma del soldado.
   * @returns Retornará el arma del soldado.
   */
  getAtaqueEspecial(): number {
    return this.ataqueEspecial;
  }
}
