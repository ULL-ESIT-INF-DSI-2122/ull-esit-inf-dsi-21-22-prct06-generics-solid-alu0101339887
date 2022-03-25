export class Cifrado {
  private cadena: string;
  private clave: string;
  private alfabeto: string;
  private result: string = "";

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
  
  cifrado(aux: boolean): void{
    this.eliminarEspacios();
    let desplazamiento = 0; 
    let nuevaPos = 0;
    for (let i = 0; i < this.cadena.length; i++) {
      for (let j = 0; j < this.clave.length; j++) {
        if (this.result.length === this.cadena.length) break;
        desplazamiento = this.alfabeto.indexOf(this.clave[j]) + 1;
        if (aux) nuevaPos = (desplazamiento + this.alfabeto.indexOf(this.cadena[i])) % this.alfabeto.length;
        else nuevaPos = (this.alfabeto.indexOf(this.cadena[i]) - desplazamiento + this.alfabeto.length) % this.alfabeto.length;
        this.result = this.result + this.alfabeto[nuevaPos];
        i++;
      }
      i--;
    } 
  }

  cifrar(): string {
    this.cifrado(true);
    return this.result;
  }

  descifrar(): string {
    this.cifrado(false);
    return this.result;
  }
}
