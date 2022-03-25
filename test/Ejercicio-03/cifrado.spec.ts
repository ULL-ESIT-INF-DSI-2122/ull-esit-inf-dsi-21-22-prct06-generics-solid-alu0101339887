import 'mocha';
import { expect } from 'chai';
import { Cifrado } from '../../src/Ejercicio-03/Cifrado';

describe('Cifrado', () => {
  let cifrado: Cifrado;
  let descifrado: Cifrado;
  beforeEach(() => {
    cifrado = new Cifrado("HOLA ESTO ES UNA PRUEBA:", "CLAVE");
    descifrado = new Cifrado("KAMWJVFPAXXYBMWXPCW", "CLAVE");
  });
  it('Existe un método cifrar', () => {
    expect(cifrado.cifrar).to.exist;
    expect(cifrado.cifrar).to.be.a('function');
    expect(cifrado.cifrar()).to.be.equal("KAMWJVFPAXXYBMWXPCW:");
  });
  it('Existe un método descifrar', () => {
    expect(descifrado.descifrar).to.exist;
    expect(descifrado.descifrar).to.be.a('function');
    expect(descifrado.descifrar()).to.be.equal("HOLAESTOESUNAPRUEBA");
  });
  it('Existe un método eliminarEspacios', () => {
    expect(cifrado.eliminarEspacios).to.exist;
    expect(cifrado.eliminarEspacios).to.be.a('function');
    expect(() => cifrado.eliminarEspacios()).not.to.throw;

    cifrado.eliminarEspacios();
    expect(cifrado.getCadena()).to.be.equal("HOLAESTOESUNAPRUEBA:");
  });
});