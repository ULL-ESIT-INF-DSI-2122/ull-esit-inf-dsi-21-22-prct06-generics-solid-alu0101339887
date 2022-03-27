import 'mocha';
import { expect } from 'chai';
import { Movies } from '../../src/Ejercicio-02/Movies';

describe('MoviesCollection', () => {
  let movie: Movies;
  beforeEach(() => {
    movie = new Movies("Los juegos del hambre", 2012, "Acción", "Saga");
  });
  it('Existe un método getName', () => {
    expect(movie.getName).to.exist;
    expect(movie.getName).to.be.a('function');
    expect(movie.getName()).to.be.equal("Los juegos del hambre");
  });
  it('Existe un método getYear', () => {
    expect(movie.getYear).to.exist;
    expect(movie.getYear).to.be.a('function');
    expect(movie.getYear()).to.deep.equal(2012);
  });
  it('Existe un método getGenre', () => {
    expect(movie.getGenre).to.exist;
    expect(movie.getGenre).to.be.a('function');
    expect(movie.getGenre()).to.be.equal("Acción");
  });
  it('Existe un método getType', () => {
    expect(movie.getType).to.exist;
    expect(movie.getType).to.be.a('function');
    expect(movie.getType()).to.be.equal("Saga");
  });
});