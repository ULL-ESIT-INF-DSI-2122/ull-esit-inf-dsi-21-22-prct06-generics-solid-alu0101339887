import {BasicStreamableCollection} from "./BasicStreamableCollection"

export class Documentary<T> extends BasicStreamableCollection<T>{
  private time: number;

  constructor(name: string, year: number, genre: string, time: number) {
    super(name, year, genre);
    this.time = time;
  }

  searchBy(element: string): T[] | string{
    let genreItems: T[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.time === Number(element))
        genreItems.push(this.items[i]);
    }
    if (genreItems.length === 0) return "No se ha encontrado ningún elemento que dure esa cantidad de tiempo";
    else return genreItems;
  }
}