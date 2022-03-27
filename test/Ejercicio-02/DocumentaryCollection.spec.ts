import 'mocha';
import { expect } from 'chai';
import { Documentary } from '../../src/Ejercicio-02/Documentary';
import { DocumentaryCollection } from '../../src/Ejercicio-02/DocumentaryCollection';

describe('DocumentaryCollection', () => {
  let documentaries: DocumentaryCollection;
  let documentaryA: Documentary;
  let documentaryB: Documentary;
  let documentaryC: Documentary;
  beforeEach(() => {
    documentaries = new DocumentaryCollection();
    documentaryA = new Documentary("Hongos fantásticos", 2019, "Naturaleza", 81);
    documentaryB = new Documentary("El último aliento", 2018, "Psicología", 86);
    documentaryC = new Documentary("Un océano de plástico", 2016, "Actualidad", 102);
    documentaries.addItem(documentaryA);
    documentaries.addItem(documentaryB);
  });
  it('Existe un método addItem', () => {
    expect(documentaries.addItem).to.exist;
    expect(documentaries.addItem).to.be.a('function');
    expect(documentaries.addItem(documentaryC)).not.to.throw;
  });
  it('Existe un método getAllItems', () => {
    expect(documentaries.getAllItems).to.exist;
    expect(documentaries.getAllItems).to.be.a('function');
    expect(documentaries.getAllItems()).to.deep.equal([documentaryA, documentaryB]);
  });
  it('Existe un método getItem', () => {
    expect(documentaries.getItem).to.exist;
    expect(documentaries.getItem).to.be.a('function');
    expect(documentaries.getItem(0)).to.be.equal(documentaryA);
  });
  it('Existe un método removeItem', () => {
    expect(documentaries.removeItem).to.exist;
    expect(documentaries.removeItem).to.be.a('function');
    expect(documentaries.removeItem(0)).not.to.throw;
    expect(documentaries.getItem(0)).to.be.equal(documentaryB);
  });
  it('Existe un método getNumberOfItems', () => {
    expect(documentaries.getNumberOfItems).to.exist;
    expect(documentaries.getNumberOfItems).to.be.a('function');
    expect(documentaries.getNumberOfItems()).to.be.equal(2);
  });
  it('Existe un método searchByName', () => {
    expect(documentaries.searchByName).to.exist;
    expect(documentaries.searchByName).to.be.a('function');
    expect(documentaries.searchByName("Hongos fantásticos")).to.be.equal(documentaryA);
    expect(documentaries.searchByName("Viaje por el Cosmos")).to.be.equal("No se ha encontrado ningún elemento con este nombre");
  });
  it('Existe un método searchByGenre', () => {
    expect(documentaries.searchByGenre).to.exist;
    expect(documentaries.searchByGenre).to.be.a('function');
    expect(documentaries.searchByGenre("Psicología")).to.deep.equal([documentaryB]);
    expect(documentaries.searchByGenre("Astronomía")).to.be.equal("No se ha encontrado ningún elemento de este género");
  });
  it('Existe un método searchByYear', () => {
    expect(documentaries.searchByYear).to.exist;
    expect(documentaries.searchByYear).to.be.a('function');
    expect(documentaries.searchByYear(2018)).to.deep.equal([documentaryB]);
    expect(documentaries.searchByYear(2000)).to.be.equal("No se ha encontrado ningún elemento de este año");
  });
  it('Existe un método searchBy', () => {
    documentaries.addItem(documentaryC);
    expect(documentaries.searchBy).to.exist;
    expect(documentaries.searchBy).to.be.a('function');
    expect(documentaries.searchBy("102")).to.deep.equal([documentaryC]);
    expect(documentaries.searchBy("65")).to.be.equal("No se ha encontrado ningún elemento que dure esa cantidad de tiempo");
  });
});