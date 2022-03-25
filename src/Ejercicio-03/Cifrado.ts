export class Cifrado {
  private cadena: string;
  private clave: string;
  private alfabeto: string;

  constructor(cadena: string, clave: string, alfabeto?: string) {
    this.cadena = cadena;
    this.clave = clave;
    this.alfabeto = alfabeto || "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  }

  eliminarEspacios(): void {
    let str = "";
    for (let i = 0; i < this.cadena.length; i++)
      if (this.cadena[i] !== " ") str = str + this.cadena[i];
    this.cadena = str;
  }

  cifrar() {
    for (let i = 0; i < this.cadena.length; i++) {
      for (let j = 0; j < this.clave.length; j++) {
        
      }
    } 
  }

}