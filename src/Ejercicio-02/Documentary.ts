import {BasicStreamableCollection} from "./BasicStreamableCollection"

/**
 * Documentary es una clase heredada de BasicStreamableCollection que almacenará una 
 * colección de documentales.
 */
export class Documentary<T> extends BasicStreamableCollection<T>{
  private time: number;

  constructor(name: string, year: number, genre: string, time: number) {
    super(name, year, genre);
    this.time = time;
  }

  /**
   * Busca elementos según la duración del documental y los devuelve en caso de existir, en otro caso
   * se muestra un mensaje de error.
   * @param element Duración del elemento.
   * @returns {T[] | string} Elementos de la colección o un mensaje de error.
   */
  searchBy(element: string): T[] | string{
    let timeItems: T[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.time === Number(element))
        timeItems.push(this.items[i]);
    }
    if (timeItems.length === 0) return "No se ha encontrado ningún elemento que dure esa cantidad de tiempo";
    else return timeItems;
  }
}