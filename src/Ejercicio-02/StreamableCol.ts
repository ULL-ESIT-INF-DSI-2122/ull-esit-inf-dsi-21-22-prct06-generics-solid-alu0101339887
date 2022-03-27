export interface StreamableCol <T> {
  addItem(item: T): void;
  getAllItems(): T[];
  getItem(index: number): T;
  removeItem(index: number): void;
  getNumberOfItems(): number;
}