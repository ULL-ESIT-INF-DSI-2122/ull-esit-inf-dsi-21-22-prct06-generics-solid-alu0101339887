import { Combat } from "./Combat";
import { Fighter } from "./Fighter";
import { CombatPrinter } from "./CombatPrinter";

export class CombatCalc {
  constructor (private combat: Combat, 
               private fighterA: Fighter, 
               private fighterB: Fighter, 
               private print: CombatPrinter) {}
  /**
   * Función para aumentar el turno del combate.
   */
  aumentarTurno(): void {
    this.combat.setTurno(this.combat.getTurno() + 1);
  }

  /**
   * Función para relizar el combate entre los dos pokémon.
   * @returns Retornará el nombre del pokémon ganador.
   */
  combate(): string {
    this.print.mostrarInicioCombate();
    const DAMAGE_A = this.fighterA.damage(this.fighterB);
    const DAMAGE_B = this.fighterB.damage(this.fighterA);
    while (true) {
      if (this.combat.getTurno() % 2 === 0) {
        this.vida(DAMAGE_A);
        this.print.mostrarTurno(true);
      }
      else {
        this.vida(DAMAGE_B);
        this.print.mostrarTurno(false);
      }
      this.print.mostrarVida();
      this.aumentarTurno();
      if (this.fighterB.getHP() === 0) {
        this.print.mostrarGanador(true);
        // console.log(this.msj);
        return this.fighterA.getNombre();
      }
      if (this.fighterA.getHP() === 0) {
        this.print.mostrarGanador(false);
        // console.log(this.msj);
        return this.fighterB.getNombre();
      }
    }
  }

  /**
   * Función para reducir la vida del pokémon que recibió el ataque.
   * @param damage Daño causado de un pokémon sobre otro.
   */
  vida(damage: number): void {
    if (this.combat.getTurno() % 2 === 0) {
      let aux = this.fighterB.getHP() - damage;
      if (aux < 0)
        this.fighterB.setHP(0);
      else
        this.fighterB.setHP(aux);
    }
    else {
      let aux = this.fighterA.getHP() - damage;
      if (aux < 0)
        this.fighterA.setHP(0);
      else 
        this.fighterA.setHP(aux);
    }
  }
}