import {BasicStreamableCollection} from "./BasicStreamableCollection"
import { Documentary } from "./Documentary"

/**
 * DocumentaryCollection es una clase heredada de BasicStreamableCollection que almacenará una 
 * colección de documentales.
 */
export class DocumentaryCollection extends BasicStreamableCollection<Documentary>{
  private time: number = 0;

 /**
   * Busca un elemento según su nombre y lo devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param name Nombre del elemento.
   * @returns {Documentary | string} Elemento de la colección o un mensaje de error.
   */
  searchByName(name: string): Documentary | string{
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getName() === name) return this.items[i];
    }
    return "No se ha encontrado ningún elemento con este nombre";
  }

  /**
   * Busca elementos según su género y los devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param genre Género del elemento.
   * @returns {Documentary[] | string} Elementos de la colección o un mensaje de error.
   */
  searchByGenre(genre: string): Documentary[] | string{
    let genreItems: Documentary[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getGenre() === genre) genreItems.push(this.items[i]);
    }
    if (genreItems.length === 0) return "No se ha encontrado ningún elemento de este género";
    else return genreItems;
  }

  /**
   * Busca elementos según su año de estreno y los devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param year Año de estreno del elemento.
   * @returns {Documentary[] | string} Elementos de la colección o un mensaje de error.
   */
  searchByYear(year: number): Documentary[] | string{
    let yearItems: Documentary[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getYear() === year) yearItems.push(this.items[i]);
    }
    if (yearItems.length === 0) return "No se ha encontrado ningún elemento de este año";
    else return yearItems;
  }

  /**
   * Busca elementos según la duración del documental y los devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param element Duración del elemento.
   * @returns {Documentary[] | string} Elementos de la colección o un mensaje de error.
   */
  searchBy(element: string): Documentary[] | string{
    let timeItems: Documentary[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getTime() === Number(element))
        timeItems.push(this.items[i]);
    }
    if (timeItems.length === 0) return "No se ha encontrado ningún elemento que dure esa cantidad de tiempo";
    else return timeItems;
  }
}