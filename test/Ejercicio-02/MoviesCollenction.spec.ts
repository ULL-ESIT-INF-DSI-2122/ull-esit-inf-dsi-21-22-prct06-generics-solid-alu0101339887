import 'mocha';
import { expect } from 'chai';
import { Movies } from '../../src/Ejercicio-02/Movies';
import { MoviesCollection } from '../../src/Ejercicio-02/MoviesCollection';

describe('MoviesCollection', () => {
  let movies: MoviesCollection;
  let movieA: Movies;
  let movieB: Movies;
  let movieC: Movies;
  beforeEach(() => {
    movies = new MoviesCollection();
    movieA = new Movies("Los juegos del hambre", 2012, "Acción", "Saga");
    movieB = new Movies("Tenet", 2020, "Acción", "Independiente");
    movieC = new Movies("Crepúsculo", 2008, "Fantasía", "Saga");
    movies.addItem(movieA);
    movies.addItem(movieB);
  });
  it('Existe un método addItem', () => {
    expect(movies.addItem).to.exist;
    expect(movies.addItem).to.be.a('function');
    expect(movies.addItem(movieC)).not.to.throw;
  });
  it('Existe un método getAllItems', () => {
    expect(movies.getAllItems).to.exist;
    expect(movies.getAllItems).to.be.a('function');
    expect(movies.getAllItems()).to.deep.equal([movieA, movieB]);
  });
  it('Existe un método getItem', () => {
    expect(movies.getItem).to.exist;
    expect(movies.getItem).to.be.a('function');
    expect(movies.getItem(0)).to.be.equal(movieA);
  });
  it('Existe un método removeItem', () => {
    expect(movies.removeItem).to.exist;
    expect(movies.removeItem).to.be.a('function');
    expect(movies.removeItem(0)).not.to.throw;
    expect(movies.getItem(0)).to.be.equal(movieB);
  });
  it('Existe un método getNumberOfItems', () => {
    expect(movies.getNumberOfItems).to.exist;
    expect(movies.getNumberOfItems).to.be.a('function');
    expect(movies.getNumberOfItems()).to.be.equal(2);
  });
  it('Existe un método searchByName', () => {
    expect(movies.searchByName).to.exist;
    expect(movies.searchByName).to.be.a('function');
    expect(movies.searchByName("Tenet")).to.be.equal(movieB);
    expect(movies.searchByName("Eternals")).to.be.equal("No se ha encontrado ningún elemento con este nombre");
  });
  it('Existe un método searchByGenre', () => {
    expect(movies.searchByGenre).to.exist;
    expect(movies.searchByGenre).to.be.a('function');
    expect(movies.searchByGenre("Acción")).to.deep.equal([movieA, movieB]);
    expect(movies.searchByGenre("Comedia")).to.be.equal("No se ha encontrado ningún elemento de este género");
  });
  it('Existe un método searchByYear', () => {
    expect(movies.searchByYear).to.exist;
    expect(movies.searchByYear).to.be.a('function');
    expect(movies.searchByYear(2020)).to.deep.equal([movieB]);
    expect(movies.searchByYear(2000)).to.be.equal("No se ha encontrado ningún elemento de este año");
  });
  it('Existe un método searchBy', () => {
    movies.addItem(movieC);
    expect(movies.searchBy).to.exist;
    expect(movies.searchBy).to.be.a('function');
    expect(movies.searchBy("Saga")).to.deep.equal([movieA, movieC]);
    expect(movies.searchBy("Trilogía")).to.be.equal("No se ha encontrado ningún elemento con esa característica");
  });
});