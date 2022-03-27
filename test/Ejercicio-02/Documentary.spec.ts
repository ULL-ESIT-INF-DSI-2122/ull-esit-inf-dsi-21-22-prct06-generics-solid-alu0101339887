import 'mocha';
import { expect } from 'chai';
import { Documentary } from '../../src/Ejercicio-02/Documentary';

describe('DocumentaryCollection', () => {
  let documentary: Documentary;
  beforeEach(() => {
    documentary = new Documentary("Hongos fantásticos", 2019, "Naturaleza", 81);
  });
  it('Existe un método getName', () => {
    expect(documentary.getName).to.exist;
    expect(documentary.getName).to.be.a('function');
    expect(documentary.getName()).to.be.equal("Hongos fantásticos");
  });
  it('Existe un método getYear', () => {
    expect(documentary.getYear).to.exist;
    expect(documentary.getYear).to.be.a('function');
    expect(documentary.getYear()).to.deep.equal(2019);
  });
  it('Existe un método getGenre', () => {
    expect(documentary.getGenre).to.exist;
    expect(documentary.getGenre).to.be.a('function');
    expect(documentary.getGenre()).to.be.equal("Naturaleza");
  });
  it('Existe un método getTime', () => {
    expect(documentary.getTime).to.exist;
    expect(documentary.getTime).to.be.a('function');
    expect(documentary.getTime()).to.be.equal(81);
  });
});