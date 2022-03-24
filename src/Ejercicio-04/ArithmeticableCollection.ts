/**
 * ArithmeticableCollection es una clase genérica que define un conjunto de métodos que 
 * podemos emplear para modificar la colección elementos aritméticos que tenemos además 
 * de realizar ciertas operaciones con ellos. 
 */
export class ArithmeticableCollection <T> {
  protected elements: T[] = [];

  /**
   * Método para añadir nuevos elementos a nuestra colección elements[].
   * @param element Elemento que se va a añadir a la colección.
   */
  addArithmeticable(element: T): void {
    this.elements.push(element);
  }

  /**
   * Método que nos devolverá el elemento que se encuentre en la posición que el índice que 
   * se haya introducido indique.
   * @param index Índice que indica la posición del elemtento dentro de la colección.
   * @returns Retornará el elemento que se encuentre en la posición [index].
   */
  getArithmeticable(index: number): T {
    return this.elements[index];
  }

  /**
   * Método que nos indicará el tamaño de la colección de elementos. 
   * @returns Retornará el tamaño de nuestra colección de elementos. 
   */
  getNumberOfArithmeticables() {
    return this.elements.length;
  }
} 