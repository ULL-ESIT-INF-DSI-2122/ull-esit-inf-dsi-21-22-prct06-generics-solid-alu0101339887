/**
 * Streamable es una interfaz que permite almacenar y buscar elementos de una colección.
 * @interface Streamable
 * @template T
 */
 export interface Streamable <T> {
  /**
   * Permite añadir un elemento a la colección.
   * @param item Elemento a añadir.
   */
  addItem(item: T): void;

  /**
   * Permite obtener los elementos de la colección.
   * @returns {T[]} Elementos de la colección.
   */
  getAllItems(): T[];

  getItem(index: number): T;

  /**
   * Permite eliminar un elemento de la colección por su índice.
   * @param index Índice del elemento a eliminar.
   */
  removeItem(index: number): void;

  /**
   * Permite obtener el número de elementos de la colección.
   * @returns {number} Número de elementos de la colección.
   */
  getNumberOfItems(): number;

  searchByName(name: string): T | string;

  searchByGenre(genre: string): T[] | string;

  searchByYear(year: number): T[] | string;

  searchBy(element: string): T[] | string;
}