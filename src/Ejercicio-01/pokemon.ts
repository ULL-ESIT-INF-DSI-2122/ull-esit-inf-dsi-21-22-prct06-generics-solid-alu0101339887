/**
 * Clase para definir la información de cada pokémon.
 */
export class Pokemon {
  constructor(private nombre: string, 
              private peso: number, 
              private altura: number, 
              private tipo: string, 
              private ataque: number, 
              private defensa: number, 
              private velocidad: number, 
              private HP: number) {
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
   * Función que devuelve el tipo del pokémon.
   * @returns Retornará el tipo del pokémon.
   */
  getTipo(): string {
    return this.tipo;
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

  /**
   * Función que devuelve el peso del pokémon.
   * @returns Retornará el peso del pokémon.
   */
  getPeso(): number {
    return this.peso;
  }

  /**
   * Función que devuelve la altura del pokémon.
   * @returns Retornará la altura del pokémon.
   */
  getAltura(): number {
    return this.altura;
  }
}