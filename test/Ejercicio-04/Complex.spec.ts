import 'mocha';
import { expect } from 'chai';
import { Complex } from '../../src/Ejercicio-04/Complex';

describe('Complex', () => {
  let complex: Complex<number>;
  beforeEach(() => {
    complex = new Complex<number>();
  });
  it('Existe un método add', () => {
    complex.add(1, 3);
    expect(complex.add).to.exist;
    expect(complex.add).to.be.a('function');
    expect(() => complex.add(1, 3)).not.to.throw;
    expect(complex.getResult()).to.be.equal(4);
  });
  it('Existe un método substract', () => {
    complex.substract(5, 3);
    expect(complex.substract).to.exist;
    expect(complex.substract).to.be.a('function');
    expect(() => complex.substract(4, 2)).not.to.throw;
    expect(complex.getResult()).to.be.equal(2);
  });
  it('Existe un método multiply', () => {
    complex.multiply(1, 3);
    expect(complex.multiply).to.exist;
    expect(complex.multiply).to.be.a('function');
    expect(() => complex.multiply(1, 3)).not.to.throw;
    expect(complex.getResult()).to.be.equal(3);
  });
  it('Existe un método divide', () => {
    complex.divide(4, 2);
    expect(complex.divide).to.exist;
    expect(complex.divide).to.be.a('function');
    expect(() => complex.divide(4, 2)).not.to.throw;
    expect(complex.getResult()).to.be.equal(2);
  });
});