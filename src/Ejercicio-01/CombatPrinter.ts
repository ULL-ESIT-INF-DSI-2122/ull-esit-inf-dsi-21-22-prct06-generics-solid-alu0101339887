import { Combat } from "./Combat";
import { Fighter } from "./Fighter";

/**
 * CombatPrinter se encargará de imprimir los mensajes que deben salir por pantalla.
 */
export class CombatPrinter {
  constructor(private combat: Combat, 
              private fighterA: Fighter, 
              private fighterB: Fighter) {}

  /**
   * Función para mostrar la vida que tiene cada uno de los luchadores.
   */
  mostrarVida(): void {
    this.combat.setMsj(this.combat.getMsj() + `\n\n· HP de ${this.fighterA.getNombre()}: ${this.fighterA.getHP()}`);
    this.combat.setMsj(this.combat.getMsj() + `\n· HP de ${this.fighterB.getNombre()}: ${this.fighterB.getHP()}`);
  }

  /**
   * Función para mostrar el inicio del combate.
   */
  mostrarInicioCombate(): void {
    this.combat.setMsj(this.combat.getMsj() + "\n*************************************************");
    this.combat.setMsj(this.combat.getMsj() + "\n\n\t-- COMIENZA EL COMBATE --");
    this.combat.setMsj(this.combat.getMsj() + `\n\n\t  ${this.fighterA.getNombre().toUpperCase()} Vs. ${this.fighterB.getNombre().toUpperCase()}`);
    this.combat.setMsj(this.combat.getMsj() + `\n\t       ${this.fighterA.getHP()}     ${this.fighterB.getHP()}`);
    this.combat.setMsj(this.combat.getMsj() + "\n\n*************************************************");
  }

  /**
   * Función para mostrar el turno del combate.
   * @param aux Variable para idendificar a qué luchador le toca atacar.
   */
  mostrarTurno(aux: boolean): void {
    if (aux)
      this.combat.setMsj(this.combat.getMsj() + `\n\n\t-- TURNO ${this.combat.getTurno() + 1} · Ataca ${this.fighterA.getNombre()} --`);
    else
      this.combat.setMsj(this.combat.getMsj() + `\n\n\t-- TURNO ${this.combat.getTurno() + 1} · Ataca ${this.fighterB.getNombre()} --`);
  }
  
  /**
   * Función para mostrar el final del combate.
   * @param aux Variable para idendificar a qué luchador gana.
   */
  mostrarGanador(aux: boolean): void {
    this.combat.setMsj(this.combat.getMsj() + "\n\n-------------------------------------------------");
    if (aux)
      this.combat.setMsj(this.combat.getMsj() + `\n\n\t -- FINAL --\n\n>> El ganador es: ${this.fighterA.getNombre()}`);
    else
      this.combat.setMsj(this.combat.getMsj() + `\n\n\t -- FINAL --\n\n>> El ganador es: ${this.fighterB.getNombre()}`);
    this.combat.setMsj(this.combat.getMsj() + "\n\n-------------------------------------------------");
  }
}