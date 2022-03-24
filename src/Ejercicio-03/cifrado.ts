export class Cifrado {
  private clave: string;
  private cadena: string;
  private alfabeto: string;
  private cadenaClave: string = "";
  private cadenaFinal: string = "";

  constructor(cadena: string, clave: string, alfabeto?: string) {
    this.clave = clave;
    this.cadena = cadena;
    this.alfabeto = alfabeto || "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  }

  getCadenaClave(): string {
    return this.cadenaClave;
  }

  getCadena(): string {
    return this.cadena;
  }

  getCadenaFinal(): string {
    return this.cadenaFinal;
  }

  rellenarCadenaClave(): void {
    this.eliminarEspacios();
    while (this.cadenaClave.length < this.cadena.length) {
      let tam = this.cadena.length - this.cadenaClave.length;
      if (tam < this.clave.length)
        for (let i = 0; i < tam; i++)
          this.cadenaClave = this.cadenaClave + this.clave[i];
      else this.cadenaClave = this.cadenaClave + this.clave;
    }
  }

  comprobarPos(letra: string): number {
    let counter = 1;
    for (let i = 0; i < this.alfabeto.length; i++) {
      if (letra === this.alfabeto[i]) return counter;
      counter++;
    }
    return 0;
  }

  informarError(letra: string): string {
    return `ERROR. La letra ${letra} no pertenece al alfabeto. \n--> Vuelva a ejecutar el cifrado añadiendo otra clave`;
  }

  eliminarEspacios(): void {
    let str = "";
    for (let i = 0; i < this.cadena.length; i++)
      if (this.cadena[i] !== " ") str = str + this.cadena[i];
    this.cadena = str;
  }

  desplazamientoCifrado(): void {
    for (let i = 0; i < this.cadenaClave.length; i++) {
      if (this.comprobarPos(this.cadenaClave[i]) === 0) this.informarError(this.cadenaClave[i]);
      this.cifrar(this.datosCifrado(i));
    }
  }

  desplazamientoDescifrado(): void {
    for (let i = 0; i < this.cadenaClave.length; i++) {
      if (this.comprobarPos(this.cadenaClave[i]) === 0) this.informarError(this.cadenaClave[i]);
      this.cifrar(this.datosDescifrado(i));
    }
  }

  datosCifrado(index: number): number[] {
    return [this.comprobarPos(this.cadenaClave[index]), this.comprobarPos(this.cadena[index])];
  }

  datosDescifrado(index: number): number[] {
    return [this.comprobarPos(this.cadenaClave[index]), this.comprobarPos(this.cadenaFinal[index])];
  }

  cifrar(num: number[]): void {
    let tam = num[0] + num[1];
    if (tam >= this.alfabeto.length) {
      while (tam > this.alfabeto.length)
        tam = tam - this.alfabeto.length;
    }
    this.cadenaFinal = this.cadenaFinal + this.alfabeto[tam - 1];
  }

  cifrado() {
    this.rellenarCadenaClave();
    this.desplazamientoCifrado();
  }

  descifrado() {
    this.cifrado();
    this.desplazamientoDescifrado();
  }
}


let cifrado: Cifrado;
cifrado = new Cifrado("HOLA ESTO ES UNA PRUEBA", "CLAVE");

cifrado.cifrado();
console.log(cifrado.getCadenaFinal());
console.log("kamwjvfpaxxzblwxqcw".toLocaleUpperCase());
console.log(cifrado.getCadenaFinal());