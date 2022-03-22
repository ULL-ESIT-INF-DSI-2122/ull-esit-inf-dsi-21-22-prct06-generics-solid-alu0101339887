import {Pokemon} from './pokemon'

/**
 * Clase Combat. Contentrá las funciones necesarias para realizar el combate pokémon.
 */
export class Combat {
  private numTurno: number;
  private msj: string;
  constructor(private pokemonA: Pokemon, 
              private pokemonB: Pokemon) {
    this.numTurno = 0;
    this.msj = "";
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

  /**
   * Función para aumentar el turno del combate.
   */
  aumentarTurno(): void {
    this.setTurno(this.getTurno() + 1);
  }

  /**
   * Función para calcular el daño que hace el primer pokémon sobre el segundo.
   * @param pokemonA Primer pokémon.
   * @param pokemonB Segundo pokémon.
   * @returns Retornará el daño causado por el primer pokémon al segundo.
   */
  damage (pokemonA: Pokemon, pokemonB: Pokemon): number {
    return Number((50 * (pokemonA.getAtaque() / pokemonB.getDefensa()) * this.efectividad(pokemonA, pokemonB)).toFixed(2));
  }

  /**
   * Función para calcular la efectividad que tiene el primer pokémon sobre el segundo.
   * @param pokemonA Primer pokémon
   * @param pokemonB Segundo pokémon
   * @returns Retornará la efectividad que tiene el primer pokémon sobre el segundo.
   */
  efectividad (pokemonA: Pokemon, pokemonB: Pokemon): number {
    if ((pokemonA.getTipo() === 'fuego' && pokemonB.getTipo() === 'hierba') || 
        (pokemonA.getTipo() === 'agua' && pokemonB.getTipo() === 'fuego') || 
        (pokemonA.getTipo() === 'hierba' && pokemonB.getTipo() === 'agua')  || 
        (pokemonA.getTipo() === 'electrico' && pokemonB.getTipo() === 'agua')) { 
      return 2;
    } 
    if ((pokemonA.getTipo() === 'fuego' && pokemonB.getTipo() === 'electrico') || 
        (pokemonA.getTipo() === 'hierba' && pokemonB.getTipo() === 'electrico') ||
        (pokemonA.getTipo() === 'electrico' && pokemonB.getTipo() === 'fuego') || 
        (pokemonA.getTipo() === 'electrico' && pokemonB.getTipo() === 'hierba')) {
      return 1;
    } 
    return 0.5;
  }

  /**
   * Función para relizar el combate entre los dos pokémon.
   * @returns Retornará el nombre del pokémon ganador.
   */
  combate(): string {
    this.msj = this.msj + "\n*************************************************";
    this.msj = this.msj + "\n\n\t-- COMIENZA EL COMBATE --";
    this.msj = this.msj + `\n\n\t  ${this.pokemonA.getNombre().toUpperCase()} Vs. ${this.pokemonB.getNombre().toUpperCase()}`;
    this.msj = this.msj + `\n\t       ${this.pokemonA.getHP()}     ${this.pokemonB.getHP()}`;
    this.msj = this.msj + "\n\n*************************************************";
    const DAMAGE_A = this.damage(this.pokemonA, this.pokemonB);
    const DAMAGE_B = this.damage(this.pokemonB, this.pokemonA);
    while (true) {
      if (this.getTurno() % 2 === 0) {
        this.vida(DAMAGE_A);
        this.msj = this.msj + `\n\n\t-- TURNO ${this.getTurno() + 1} · Ataca ${this.pokemonA.getNombre()} --`;
      }
      else {
        this.vida(DAMAGE_B);
        this.msj = this.msj + `\n\n\t-- TURNO ${this.getTurno() + 1} · Ataca ${this.pokemonB.getNombre()} --`;
      }
      this.mostrarVida();
      this.msj = this.msj + "\n\n-------------------------------------------------";
      this.aumentarTurno();
      if (this.pokemonB.getHP() === 0) {
        this.msj = this.msj + `\n\n\t -- FINAL --\n\n>> El ganador es: ${this.pokemonA.getNombre()}`;
        // console.log(this.msj);
        return this.pokemonA.getNombre();
      }
      if (this.pokemonA.getHP() === 0) {
        this.msj = this.msj + `\n\n\t -- FINAL --\n\n>> El ganador es: ${this.pokemonB.getNombre()}`;
        // console.log(this.msj);
        return this.pokemonB.getNombre();
      }
    }
  }

  /**
   * Función para reducir la vida del pokémon que recibió el ataque.
   * @param damage Daño causado de un pokémon sobre otro.
   */
  vida(damage: number): void {
    if (this.getTurno() % 2 === 0) {
      let aux = this.pokemonB.getHP() - damage;
      if (aux < 0)
        this.pokemonB.setHP(0);
      else
        this.pokemonB.setHP(aux);
    }
    else {
      let aux = this.pokemonA.getHP() - damage;
      if (aux < 0)
        this.pokemonA.setHP(0);
      else 
        this.pokemonA.setHP(aux);
    }
  }

  /**
   * Función para mostrar la vida que tiene cada uno de los pokémon.
   */
  mostrarVida(): void {
    this.msj = this.msj + `\n\n· HP de ${this.pokemonA.getNombre()}: ${this.pokemonA.getHP()}`;
    this.msj = this.msj + `\n· HP de ${this.pokemonB.getNombre()}: ${this.pokemonB.getHP()}`;
  }
}