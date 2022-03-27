import {BasicStreamableCollection} from "./BasicStreamableCollection"
import { Series } from "./Series"

/**
 * SeriesCollection es una clase heredada de BasicStreamableCollection que almacenará una 
 * colección de series.
 */
export class SeriesCollection extends BasicStreamableCollection<Series>{
  private capNumber: number = 0;

  /**
 * Busca un elemento según su nombre y lo devuelve en caso de existir, en otro caso
 * se muestra un mensaje de error.
 * @param name Nombre del elemento.
 * @returns {Series | string} Elemento de la colección o un mensaje de error.
 */
  searchByName(name: string): Series | string{
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getName() === name) return this.items[i];
    }
    return "No se ha encontrado ningún elemento con este nombre";
  }

  /**
   * Busca elementos según su género y los devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param genre Género del elemento.
   * @returns {Series[] | string} Elementos de la colección o un mensaje de error.
   */
  searchByGenre(genre: string): Series[] | string{
    let genreItems: Series[] = [];
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
   * @returns {Series[] | string} Elementos de la colección o un mensaje de error.
   */
  searchByYear(year: number): Series[] | string{
    let yearItems: Series[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getYear() === year) yearItems.push(this.items[i]);
    }
    if (yearItems.length === 0) return "No se ha encontrado ningún elemento de este año";
    else return yearItems;
  }

  /**
   * Busca elementos según el número de capítulos que tenga la serie y los devuelve 
   * en caso de existir, en otro caso se muestra un mensaje de error.
   * @param element Número de capítulos del elemento.
   * @returns {Series[] | string} Elementos de la colección o un mensaje de error.
   */
  searchBy(element: string): Series[] | string{
    let capNumItems: Series[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getCapNumber() === Number(element))
        capNumItems.push(this.items[i]);
    }
    if (capNumItems.length === 0) return "No se ha encontrado ningún elemento con esa cantidad de capítulos";
    else return capNumItems;
  }
}