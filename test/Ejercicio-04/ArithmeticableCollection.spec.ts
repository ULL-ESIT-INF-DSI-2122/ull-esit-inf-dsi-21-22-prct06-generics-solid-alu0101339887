import 'mocha';
import { expect } from 'chai';
import { ArithmeticableCollection } from '../../src/Ejercicio-04/ArithmeticableCollection';
import { Complex } from '../../src/Ejercicio-04/Complex';

describe('ArithmeticableCollection', () => {
  let collection: ArithmeticableCollection<number>;
  let complex: Complex<number>;
  beforeEach(() => {
    collection = new ArithmeticableCollection<number>();
    complex = new Complex<number>();
    collection.addArithmeticable(0);
    collection.addArithmeticable(1);
    collection.addArithmeticable(2);
    collection.addArithmeticable(3);
    collection.addArithmeticable(4);
    collection.addArithmeticable(5);
    collection.addArithmeticable(6);
    collection.addArithmeticable(7);
    collection.addArithmeticable(8);
  });
  it('Existe un método addArithmeticable', () => {
    complex.add(1, 2);
    expect(collection.addArithmeticable).to.exist;
    expect(collection.addArithmeticable).to.be.a('function');
    expect(() => collection.addArithmeticable(1)).not.to.throw;
  });
  it('Existe un método getArithmeticable', () => {
    expect(collection.getArithmeticable).to.exist;
    expect(collection.getArithmeticable).to.be.a('function');
    expect(collection.getArithmeticable(2)).to.be.an('number');
    expect(collection.getArithmeticable(1)).to.be.equal(1);
  });
  it('Existe un método getNumberOfArithmeticables', () => {
    expect(collection.getNumberOfArithmeticables).to.exist;
    expect(collection.getNumberOfArithmeticables).to.be.a('function');
    expect(collection.getNumberOfArithmeticables()).to.be.equal(9);
  });
});