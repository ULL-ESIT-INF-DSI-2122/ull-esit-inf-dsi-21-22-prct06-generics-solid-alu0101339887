import {BasicStreamableCollection} from "./BasicStreamableCollection"
import { Movies } from "./Movies"

/**
 * MoviesCollection es una clase heredada de BasicStreamableCollection que almacenará una 
 * colección de películas.
 */
export class MoviesCollection extends BasicStreamableCollection<Movies>{
  private type: string = "";

  /**
   * Busca un elemento según su nombre y lo devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param name Nombre del elemento.
   * @returns {Movies | string} Elemento de la colección o un mensaje de error.
   */
   searchByName(name: string): Movies | string{
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getName() === name) return this.items[i];
    }
    return "No se ha encontrado ningún elemento con este nombre";
  }

  /**
   * Busca elementos según su género y los devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param genre Género del elemento.
   * @returns {Movies[] | string} Elementos de la colección o un mensaje de error.
   */
  searchByGenre(genre: string): Movies[] | string{
    let genreItems: Movies[] = [];
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
   * @returns {Movies[] | string} Elementos de la colección o un mensaje de error.
   */
  searchByYear(year: number): Movies[] | string{
    let yearItems: Movies[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getYear() === year) yearItems.push(this.items[i]);
    }
    if (yearItems.length === 0) return "No se ha encontrado ningún elemento de este año";
    else return yearItems;
  }

  /**
   * Busca elementos según el tipo de película (Independiente, Saga, etc.) y los devuelve 
   * en caso de existir, en otro caso se muestra un mensaje de error.
   * @param element Tipo del elemento.
   * @returns {Movies[] | string} Elementos de la colección o un mensaje de error.
   */
  searchBy(element: string): Movies[] | string{
    let typeItems: Movies[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].getType() === element)
        typeItems.push(this.items[i]);
    }
    if (typeItems.length === 0) return "No se ha encontrado ningún elemento con esa característica";
    else return typeItems;
  }
}
