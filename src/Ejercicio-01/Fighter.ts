/**
 * Clase para definir la información de cada luchador.
 */
 export abstract class Fighter {
  constructor(protected nombre: string, 
              protected ataque: number, 
              protected defensa: number, 
              protected velocidad: number, 
              protected HP: number) {
  }

  /**
   * Asigna la vida que tiene el luchador.
   * @param hp Vida del luchador.
   */
  setHP(hp: number): void {
    this.HP = hp;
  }

  /**
   * Función que devuelve el nombre del luchador.
   * @returns Retornará el nombre del luchador.
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * Función que devuelve el ataque del luchador.
   * @returns Retornará el ataque del luchador.
   */
  getAtaque(): number {
    return this.ataque;
  }

  /**
   * Función que devuelve la defensa del luchador.
   * @returns Retornará la defensa del luchador.
   */
  getDefensa(): number {
    return this.defensa;
  }

  /**
   * Función que devuelve la velocidad del luchador.
   * @returns Retornará la velocidad del luchador.
   */
  getVelocidad(): number {
    return this.velocidad;
  }

  /**
   * Función que devuelve la vida del luchador.
   * @returns Retornará la vida del luchador.
   */
  getHP(): number {
    return this.HP;
  }

  abstract efectividad(caractA: string, caractB: string): number;

  abstract damage(fighter: Fighter): number;
}