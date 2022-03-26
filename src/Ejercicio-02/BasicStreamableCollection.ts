import {Streamable} from "./Streamable"

/**
 * BasicStreamableCollection es una clase abstracta que almacenará una colección de películas, 
 * searie y documentales.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected items: T[] = [];
  protected name: string;
  protected year: number;
  protected genre: string;

  constructor(name: string, year: number, genre: string) {
    this.name = name;
    this.year = year;
    this.genre = genre;
  }

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
   * Busca un elemento según su nombre y lo devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param name Nombre del elemento.
   * @returns {T | string} Elemento de la colección o un mensaje de error.
   */
  searchByName(name: string): T | string{
    for (let i = 0; i < this.items.length; i++) {
      if (this.name === name) return this.items[i];
    }
    return "No se ha encontrado ningún elemento con este nombre";
  }

  /**
   * Busca elementos según su género y los devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param genre Género del elemento.
   * @returns {T[] | string} Elementos de la colección o un mensaje de error.
   */
  searchByGenre(genre: string): T[] | string{
    let genreItems: T[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.genre === genre) genreItems.push(this.items[i]);
    }
    if (genreItems.length === 0) return "No se ha encontrado ningún elemento de este género";
    else return genreItems;
  }

  /**
   * Busca elementos según su año de estreno y los devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param year Año de estreno del elemento.
   * @returns {T[] | string} Elementos de la colección o un mensaje de error.
   */
  searchByYear(year: number): T[] | string{
    let yearItems: T[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.year === year) yearItems.push(this.items[i]);
    }
    if (yearItems.length === 0) return "No se ha encontrado ningún elemento de este año";
    else return yearItems;
  }

  /**
   * Método abstracto de búsqueda.
   * @param element Característica del elemento.
   */
  abstract searchBy(element: string): T[] | string;
}