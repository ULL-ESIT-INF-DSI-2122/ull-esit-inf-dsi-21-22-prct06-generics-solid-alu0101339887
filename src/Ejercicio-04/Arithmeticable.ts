/**
 * Interfaz genérica que define métodos con lo que se pueden realizar 
 * operaciones aritméticas.
 */
export interface Arithmeticable <T> {
  /**
   * Método en el que se sumaran dos elementos
   * @param numA Primer elemento
   * @param numB Segundo elemento
   */
  add(numA: T, numB: T): void;
  
  /**
   * Método en el que se restarán dos elementos
   * @param numA 
   * @param numB 
   */
  substract(numA: T, numB: T): void;
  
  /**
   * Método en el que se multiplicarán dos elementos
   * @param numA 
   * @param numB 
   */
  multiply(numA: T, numB: T): void;
  
  /**
   * Método en el que se dividirá un elemento entre otro
   * @param numA 
   * @param numB 
   */
  divide(numA: T, numB: T): void;
}