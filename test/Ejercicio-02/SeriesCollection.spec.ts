import 'mocha';
import { expect } from 'chai';
import { Series } from '../../src/Ejercicio-02/Series';
import { SeriesCollection } from '../../src/Ejercicio-02/SeriesCollection';

describe('SeriesCollection', () => {
  let series: SeriesCollection;
  let serieA: Series;
  let serieB: Series;
  let serieC: Series;
  beforeEach(() => {
    series = new SeriesCollection();
    serieA = new Series("Juego de Tronos", 2011, "Drama", 73);
    serieB = new Series("Vikingos", 2013, "Drama", 89);
    serieC = new Series("La Casa de Papel", 2017, "Suspenso", 41);
    series.addItem(serieA);
    series.addItem(serieB);
  });
  it('Existe un método addItem', () => {
    expect(series.addItem).to.exist;
    expect(series.addItem).to.be.a('function');
    expect(series.addItem(serieC)).not.to.throw;
  });
  it('Existe un método getAllItems', () => {
    expect(series.getAllItems).to.exist;
    expect(series.getAllItems).to.be.a('function');
    expect(series.getAllItems()).to.deep.equal([serieA, serieB]);
  });
  it('Existe un método getItem', () => {
    expect(series.getItem).to.exist;
    expect(series.getItem).to.be.a('function');
    expect(series.getItem(0)).to.be.equal(serieA);
  });
  it('Existe un método removeItem', () => {
    expect(series.removeItem).to.exist;
    expect(series.removeItem).to.be.a('function');
    expect(series.removeItem(0)).not.to.throw;
    expect(series.getItem(0)).to.be.equal(serieB);
  });
  it('Existe un método getNumberOfItems', () => {
    expect(series.getNumberOfItems).to.exist;
    expect(series.getNumberOfItems).to.be.a('function');
    expect(series.getNumberOfItems()).to.be.equal(2);
  });
  it('Existe un método searchByName', () => {
    expect(series.searchByName).to.exist;
    expect(series.searchByName).to.be.a('function');
    expect(series.searchByName("Juego de Tronos")).to.be.equal(serieA);
    expect(series.searchByName("Euphoria")).to.be.equal("No se ha encontrado ningún elemento con este nombre");
  });
  it('Existe un método searchByGenre', () => {
    expect(series.searchByGenre).to.exist;
    expect(series.searchByGenre).to.be.a('function');
    expect(series.searchByGenre("Drama")).to.deep.equal([serieA, serieB]);
    expect(series.searchByGenre("Comedia")).to.be.equal("No se ha encontrado ningún elemento de este género");
  });
  it('Existe un método searchByYear', () => {
    expect(series.searchByYear).to.exist;
    expect(series.searchByYear).to.be.a('function');
    expect(series.searchByYear(2013)).to.deep.equal([serieB]);
    expect(series.searchByYear(2000)).to.be.equal("No se ha encontrado ningún elemento de este año");
  });
  it('Existe un método searchBy', () => {
    series.addItem(serieC);
    expect(series.searchBy).to.exist;
    expect(series.searchBy).to.be.a('function');
    expect(series.searchBy("41")).to.deep.equal([serieC]);
    expect(series.searchBy("93")).to.be.equal("No se ha encontrado ningún elemento con esa cantidad de capítulos");
  });
});