import 'mocha';
import { expect } from 'chai';
import { Cifrado } from '../../src/Ejercicio-03/cifrado';

describe('Cifrado', () => {
  let cifrado: Cifrado;
  beforeEach(() => {
    cifrado = new Cifrado("HOLA ESTO ES UNA PRUEBA", "CLAVE");
  });
  it('Existe un método rellenarCadenaClave', () => {
    expect(cifrado.rellenarCadenaClave).to.exist;
    expect(cifrado.rellenarCadenaClave).to.be.a('function');
    expect(() => cifrado.rellenarCadenaClave()).not.to.throw;
    
    cifrado.eliminarEspacios();
    cifrado.rellenarCadenaClave();
    expect(cifrado.getCadenaClave()).to.be.equal("CLAVECLAVECLAVECLAV");
  });
  it('Existe un método comprobarPos', () => {
    let letra = "Ç";
    let error = `ERROR. La letra ${letra} no pertenece al alfabeto. \n--> Vuelva a ejecutar el cifrado añadiendo otra clave`;
    expect(cifrado.comprobarPos).to.exist;
    expect(cifrado.comprobarPos).to.be.a('function');
    expect(() => cifrado.comprobarPos("C")).not.to.throw;
    expect(cifrado.comprobarPos("C")).to.be.equal(3);
    expect(cifrado.comprobarPos("Ç")).to.be.equal(error);
  });
  it('Existe un método eliminarEspacios', () => {
    expect(cifrado.eliminarEspacios).to.exist;
    expect(cifrado.eliminarEspacios).to.be.a('function');
    expect(() => cifrado.eliminarEspacios()).not.to.throw;

    expect(cifrado.getCadena()).to.be.equal("HOLA ESTO ES UNA PRUEBA");

    cifrado.eliminarEspacios();
    expect(cifrado.getCadena()).to.be.equal("HOLAESTOESUNAPRUEBA");
  });
});