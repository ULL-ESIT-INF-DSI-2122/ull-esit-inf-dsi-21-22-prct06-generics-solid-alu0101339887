import {BasicStreamableCollection} from "./BasicStreamableCollection"

/**
 * Series es una clase heredada de BasicStreamableCollection que almacenará una 
 * colección de series.
 */
export class Series<T> extends BasicStreamableCollection<T>{
  private capNumber: number;

  constructor(name: string, year: number, genre: string, capNumber: number) {
    super(name, year, genre);
    this.capNumber = capNumber;
  }

  /**
   * Busca elementos según el número de capítulos que tenga la serie y los devuelve 
   * en caso de existir, en otro caso se muestra un mensaje de error.
   * @param element Número de capítulos del elemento.
   * @returns {T[] | string} Elementos de la colección o un mensaje de error.
   */
  searchBy(element: string): T[] | string{
    let capNumItems: T[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.capNumber === Number(element))
        capNumItems.push(this.items[i]);
    }
    if (capNumItems.length === 0) return "No se ha encontrado ningún elemento con esa cantidad de capítulos";
    else return capNumItems;
  }
}