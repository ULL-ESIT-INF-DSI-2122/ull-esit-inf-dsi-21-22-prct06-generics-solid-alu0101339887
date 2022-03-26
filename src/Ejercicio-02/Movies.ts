import {BasicStreamableCollection} from "./BasicStreamableCollection"

export class Movies<T> extends BasicStreamableCollection<T>{
  private type: string;

  constructor(name: string, year: number, genre: string, type: string) {
    super(name, year, genre);
    this.type = type;
  }

  searchBy(element: string): T[] | string{
    let genreItems: T[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.type === element)
        genreItems.push(this.items[i]);
    }
    if (genreItems.length === 0) return "No se ha encontrado ningún elemento con esa característica";
    else return genreItems;
  }
}