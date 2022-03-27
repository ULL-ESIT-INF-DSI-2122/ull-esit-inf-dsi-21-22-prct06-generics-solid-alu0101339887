/**
 * Clase Combat. Guardará información sobre el combate entre distintos tipos
 * de luchadores.
 */
export class Combat {
  private numTurno: number = 0;
  private msj: string = "";

  /**
   * Retornará el mensaje que se debe mostrar por pantalla.
   * @returns {string} Mensaje que se debe mostrar por pantalla.
   */
  getMsj(): string {
    return this.msj;
  }

  /**
   * Asignará el mensaje que se debe mostrar por pantalla.
   * @param msj Mensaje que se quiere asignar.
   */
  setMsj(msj: string): void {
    this.msj = msj;
  }

  /**
   * Función para retornar el turno del combate.
   * @returns {number} Retorna el turno del combate.
   */
  getTurno(): number {
    return this.numTurno;
  }

  /**
   * Función para asignar el turno del combate.
   * @param num Se le asignará un número al turno.
   */
  setTurno(num: number): void{
    this.numTurno = num;
  }
}


