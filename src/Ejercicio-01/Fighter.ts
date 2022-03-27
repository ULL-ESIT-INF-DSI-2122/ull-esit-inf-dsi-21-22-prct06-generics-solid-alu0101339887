/**
 * Clase para definir la información de cada pokémon.
 */
 export abstract class Fighter {
  constructor(protected nombre: string, 
              protected ataque: number, 
              protected defensa: number, 
              protected velocidad: number, 
              protected HP: number) {
  }

  /**
   * Asigna la vida que tiene el pokémon.
   * @param hp Vida del pokémon.
   */
  setHP(hp: number): void {
    this.HP = hp;
  }

  /**
   * Función que devuelve el nombre del pokémon.
   * @returns Retornará el nombre del pokémon.
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * Función que devuelve el ataque del pokémon.
   * @returns Retornará el ataque del pokémon.
   */
  getAtaque(): number {
    return this.ataque;
  }

  /**
   * Función que devuelve la defensa del pokémon.
   * @returns Retornará la defensa del pokémon.
   */
  getDefensa(): number {
    return this.defensa;
  }

  /**
   * Función que devuelve la velocidad del pokémon.
   * @returns Retornará la velocidad del pokémon.
   */
  getVelocidad(): number {
    return this.velocidad;
  }

  /**
   * Función que devuelve la vida del pokémon.
   * @returns Retornará la vida del pokémon.
   */
  getHP(): number {
    return this.HP;
  }

  abstract efectividad(caractA: string, caractB: string): number;

  abstract damage(fighter: Fighter): number;
}