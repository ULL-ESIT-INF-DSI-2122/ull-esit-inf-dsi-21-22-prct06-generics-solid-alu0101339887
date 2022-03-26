import {BasicStreamableCollection} from "./BasicStreamableCollection"

/**
 * Movies es una clase heredada de BasicStreamableCollection que almacenará una 
 * colección de películas.
 */
export class Movies<T> extends BasicStreamableCollection<T>{
  private type: string;

  constructor(name: string, year: number, genre: string, type: string) {
    super(name, year, genre);
    this.type = type;
  }

  /**
   * Busca elementos según el tipo de película (Independiente, Saga, etc.) y los devuelve 
   * en caso de existir, en otro caso se muestra un mensaje de error.
   * @param element Tipo del elemento.
   * @returns {T[] | string} Elementos de la colección o un mensaje de error.
   */
  searchBy(element: string): T[] | string{
    let typeItems: T[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.type === element)
        typeItems.push(this.items[i]);
    }
    if (typeItems.length === 0) return "No se ha encontrado ningún elemento con esa característica";
    else return typeItems;
  }
}