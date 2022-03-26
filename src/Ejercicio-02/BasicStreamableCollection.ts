import {Streamable} from "./Streamable"

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
   * @param item Item a añadir.
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Devuelve los elementos de la colección.
   * @returns {T[]} Elementos de la colección.
   */
  getAllItems(): T[] {
    return this.items;
  }

  getItem(index: number): T {
    return this.items[index];
  }

  /**
   * Elimina un elemento de la colección por su índice.
   * @param index Índice del elemento a eliminar.
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

  searchByName(name: string): T | string{
    for (let i = 0; i < this.items.length; i++) {
      if (this.name === name)
        return this.items[i];
    }
    return "No se ha encontrado ningún elemento con este nombre";
  }

  searchByGenre(genre: string): T[] | string{
    let genreItems: T[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.genre === genre)
        genreItems.push(this.items[i]);
    }
    if (genreItems.length === 0) return "No se ha encontrado ningún elemento de este género";
    else return genreItems;
  }

  searchByYear(year: number): T[] | string{
    let genreItems: T[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.year === year)
      genreItems.push(this.items[i]);
    }
    if (genreItems.length === 0) return "No se ha encontrado ningún elemento de este año";
    else return genreItems;
  }

  abstract searchBy(element: string): T[] | string;
}