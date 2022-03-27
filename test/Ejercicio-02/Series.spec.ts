import 'mocha';
import { expect } from 'chai';
import { Series } from '../../src/Ejercicio-02/Series';

describe('SeriesCollection', () => {
  let series: Series;
  beforeEach(() => {
    series = new Series("Juego de Tronos", 2011, "Drama", 73);
  });
  it('Existe un método getName', () => {
    expect(series.getName).to.exist;
    expect(series.getName).to.be.a('function');
    expect(series.getName()).to.be.equal("Juego de Tronos");
  });
  it('Existe un método getYear', () => {
    expect(series.getYear).to.exist;
    expect(series.getYear).to.be.a('function');
    expect(series.getYear()).to.deep.equal(2011);
  });
  it('Existe un método getGenre', () => {
    expect(series.getGenre).to.exist;
    expect(series.getGenre).to.be.a('function');
    expect(series.getGenre()).to.be.equal("Drama");
  });
  it('Existe un método getCapNumber', () => {
    expect(series.getCapNumber).to.exist;
    expect(series.getCapNumber).to.be.a('function');
    expect(series.getCapNumber()).to.be.equal(73);
  });
});