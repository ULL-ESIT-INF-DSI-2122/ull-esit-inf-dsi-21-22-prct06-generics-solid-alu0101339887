import {Arithmeticable} from "./Arithmeticable"

/**
 * Complex es una clase que implementa la interfaz Arithmeticable para poder hacer uso de los métodos 
 * definidos en ella a la hora de realizar las operaciones arirméticas correspondientes.
 */
export class Complex <T extends number> implements Arithmeticable <T> {
  private result: number = 0;

  /**
   * Método para devolver el valor de result.
   * @returns Retorna el valor de result.
   */
  getResult(): number {
    return this.result;
  }

  /**
   * Método para calcular la suma entre dos elementos.
   * @param numA Primer elemento.
   * @param numB Segundo elemento.
   */
  add(numA: T, numB: T): void {
    this.result = numA + numB;
  }

  /**
   * Método para calcular la suma entre dos elementos.
   * @param numA Primer elemento.
   * @param numB Segundo elemento.
   */
  substract(numA: T, numB: T): void {
    this.result = numA - numB;
  }

  /**
   * Método para calcular la suma entre dos elementos.
   * @param numA Primer elemento.
   * @param numB Segundo elemento.
   */
  multiply(numA: T, numB: T): void {
    this.result = numA * numB;
  }

  /**
   * Método para calcular la suma entre dos elementos.
   * @param numA Primer elemento.
   * @param numB Segundo elemento.
   */
  divide(numA: T, numB: T): void {
    this.result = numA / numB;
  }
}