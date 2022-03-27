export interface StreamableSearch <T> {
  searchByName(name: string): T | string;
  searchByGenre(genre: string): T[] | string;
  searchByYear(year: number): T[] | string;
  searchBy(element: string): T[] | string;
}