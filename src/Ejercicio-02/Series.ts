import {BasicStreamableCollection} from "./BasicStreamableCollection"

export class Series<T> extends BasicStreamableCollection<T>{
  private capNumber: number;

  constructor(name: string, year: number, genre: string, capNumber: number) {
    super(name, year, genre);
    this.capNumber = capNumber;
  }

  searchBy(element: string): T[] | string{
    let genreItems: T[] = [];
    for (let i = 0; i < this.items.length; i++) {
      if (this.capNumber === Number(element))
        genreItems.push(this.items[i]);
    }
    if (genreItems.length === 0) return "No se ha encontrado ningún elemento con esa cantidad de capítulos";
    else return genreItems;
  }
}