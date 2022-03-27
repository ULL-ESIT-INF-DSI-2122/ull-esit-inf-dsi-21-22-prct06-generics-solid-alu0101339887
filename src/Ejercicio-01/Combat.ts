/**
 * Clase Combat. Contentrá las funciones necesarias para realizar el combate pokémon.
 */
export class Combat {
  private numTurno: number = 0;
  private msj: string = "";

  getMsj(): string {
    return this.msj;
  }

  setMsj(msj: string): void {
    this.msj = msj;
  }

  /**
   * Función para retornar el turno del combate.
   * @returns Retorna el turno del combate.
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


