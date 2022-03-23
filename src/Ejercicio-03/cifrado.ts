export class Cifrado {
  private cadena: string;
  private clave: string;
  private cadenaClave: string;
  private posLetras: string;
  private alfabeto: string;

  constructor(cadena: string, clave: string, alfabeto?: string) {
    this.cadena = cadena;
    this.cadenaClave = "";
    this.posLetras = "";
    this.clave = clave;
    this.alfabeto = alfabeto || "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  }

  cifrar() {

  }

  rellenarCadenaClave() {
    while (this.cadenaClave.length < this.cadena.length) {
      let tam = this.cadena.length - this.cadenaClave.length;
      if (tam < this.clave.length) 
        for (let i = 0; i < tam; i++) 
          this.cadenaClave = this.cadenaClave + this.clave[i];
      else this.cadenaClave = this.cadenaClave + this.clave;
    }
  }

  comprobarPos(letra: string): number | string {
    let counter = 1;
    for (let i = 0; i < this.alfabeto.length; i++) {
      if (letra === this.alfabeto[i]) return counter;
      counter++;
    }
    return `ERROR. La letra ${letra} no pertenece al alfabeto. \n--> Vuelva a ejecutar el cifrado añadiendo otra clave`;
  }
}