import { Combat } from "./Combat";
import { Fighter } from "./Fighter";

export class CombatPrinter {
  constructor(private combat: Combat, 
              private fighterA: Fighter, 
              private fighterB: Fighter) {}

  /**
   * Función para mostrar la vida que tiene cada uno de los pokémon.
   */
  mostrarVida(): void {
    this.combat.setMsj(this.combat.getMsj() + `\n\n· HP de ${this.fighterA.getNombre()}: ${this.fighterA.getHP()}`);
    this.combat.setMsj(this.combat.getMsj() + `\n· HP de ${this.fighterB.getNombre()}: ${this.fighterB.getHP()}`);
  }
  
  mostrarInicioCombate(): void {
    this.combat.setMsj(this.combat.getMsj() + "\n*************************************************");
    this.combat.setMsj(this.combat.getMsj() + "\n\n\t-- COMIENZA EL COMBATE --");
    this.combat.setMsj(this.combat.getMsj() + `\n\n\t  ${this.fighterA.getNombre().toUpperCase()} Vs. ${this.fighterB.getNombre().toUpperCase()}`);
    this.combat.setMsj(this.combat.getMsj() + `\n\t       ${this.fighterA.getHP()}     ${this.fighterB.getHP()}`);
    this.combat.setMsj(this.combat.getMsj() + "\n\n*************************************************");
  }

  mostrarTurno(aux: boolean): void {
    if (aux)
      this.combat.setMsj(this.combat.getMsj() + `\n\n\t-- TURNO ${this.combat.getTurno() + 1} · Ataca ${this.fighterA.getNombre()} --`);
    else
      this.combat.setMsj(this.combat.getMsj() + `\n\n\t-- TURNO ${this.combat.getTurno() + 1} · Ataca ${this.fighterB.getNombre()} --`);
  }
  
  mostrarGanador(aux: boolean): void {
    this.combat.setMsj(this.combat.getMsj() + "\n\n-------------------------------------------------");
    if (aux)
      this.combat.setMsj(this.combat.getMsj() + `\n\n\t -- FINAL --\n\n>> El ganador es: ${this.fighterA.getNombre()}`);
    else
      this.combat.setMsj(this.combat.getMsj() + `\n\n\t -- FINAL --\n\n>> El ganador es: ${this.fighterB.getNombre()}`);
    this.combat.setMsj(this.combat.getMsj() + "\n\n-------------------------------------------------");
  }
}