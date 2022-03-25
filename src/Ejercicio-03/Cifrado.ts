/**
 * Cifrado es una clase que se encargará de cifrar o descifrar un mensaje.
 */
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

  /**
   * Método que retornará el valor del mensaje introducido.
   * @returns Retornará el valor del mensaje.
   */
  getCadena(): string {
    return this.cadena;
  }

  /**
   * Método para eliminar los espacios del mensaje en caso de tener.
   */
  eliminarEspacios(): void {
    let str = "";
    for (let i = 0; i < this.cadena.length; i++)
      if (this.cadena[i] !== " ") str = str + this.cadena[i];
    this.cadena = str;
  }
  
  /**
   * Método con el algoritmo de cifrado y descifrado dependiendo del caso.
   * @param aux Variable que determinará si se quiere cifrar o descifrar el mensaje.
   */
  cifrado(aux: boolean): void{
    this.eliminarEspacios();
    let desplazamiento = 0;
    let nuevaPos = 0;
    for (let i = 0; i < this.cadena.length; i++) {
      for (let j = 0; j < this.clave.length; j++) {
        if (this.result.length === this.cadena.length) break;
        if (this.alfabeto.search(this.cadena[i]) !== -1) {
          desplazamiento = this.alfabeto.indexOf(this.clave[j]) + 1;
          if (aux) nuevaPos = (desplazamiento + this.alfabeto.indexOf(this.cadena[i])) % this.alfabeto.length;
          else nuevaPos = (this.alfabeto.indexOf(this.cadena[i]) - desplazamiento + this.alfabeto.length) % this.alfabeto.length;
          this.result = this.result + this.alfabeto[nuevaPos];
        }
        else {
          this.result = this.result + this.cadena[i];
          j--;
        }
        i++;
      }
      i--;
    } 
  }

  /**
   * Método que llamará a la función de cifrado indicando que se quiere cifrar el mensaje.
   * @returns Retornará el mensaje cifrado.
   */
  cifrar(): string {
    this.cifrado(true);
    return this.result;
  }

  /**
   * Método que llamará a la función de cifrado indicando que se quiere descifrar el mensaje.
   * @returns Retornará el mensaje descifrado.
   */
  descifrar(): string {
    this.cifrado(false);
    return this.result;
  }
}
