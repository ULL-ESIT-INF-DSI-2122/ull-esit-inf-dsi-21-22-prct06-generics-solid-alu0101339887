import {Streamable} from "./Streamable"

/**
 * BasicStreamableCollection es una clase abstracta que almacenará una colección de películas, 
 * series y documentales.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected items: T[] = [];
  protected name: string = "";
  protected genre: string = "";
  protected year: number = 0;

  /**
   * Añade un item de tipo T a la colección.
   * @param item Item que se quiere añadir.
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Devuelve todos los elementos de la colección.
   * @returns {T[]} Elementos de la colección.
   */
  getAllItems(): T[] {
    return this.items;
  }

  /**
   * Devuelve el elemento que se encuentre el la posición que se especifique de la colección.
   * @param index Posición del elemento.
   * @returns {T} Elemento de la colección.
   */
  getItem(index: number): T {
    return this.items[index];
  }

  /**
   * Elimina un elemento de la colección por su índice.
   * @param index Posición del elemento.
   */
  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  /**
   * Devuelve el número de elementos de la colección.
   * @returns {number} Número de elementos de la colección.
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
abstract searchByName(
   * @param name Nombre del elemento.
   * @returns {T | string} Elemento de la colección o un mensaje de error.
   */
  abstract searchByName(name: string): T | string;

  /**
   * Busca elementos según su género y los devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param genre Género del elemento.
   * @returns {T[] | string} Elementos de la colección o un mensaje de error.
   */
  abstract searchByGenre(genre: string): T[] | string;

  /**
   * Busca elementos según su año de estreno y los devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param year Año de estreno del elemento.
   * @returns {T[] | string} Elementos de la colección o un mensaje de error.
   */
  abstract searchByYear(year: number): T[] | string;

  /**
   * Método abstracto de búsqueda.
   * @param element Característica del elemento.
   */
  abstract searchBy(element: string): T[] | string;
}