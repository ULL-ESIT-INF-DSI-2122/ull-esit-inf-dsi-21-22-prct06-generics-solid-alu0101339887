import 'mocha';
import { expect } from 'chai';

import { Pokemon } from '../../src/Ejercicio-01/Pokemon';

describe('Tests de la clase Pokemon', () => {
  var pokemon: Pokemon;
  beforeEach(() => {
    pokemon = new Pokemon(6, 0.4, 'electrico');
  });
  describe('Test de la función <<getAltura>>', () => {
    it('getAltura es una función', () => {
      expect(pokemon.getAltura).to.be.a('function');
    });
    it ('pokemon.getAltura() retorna 0.4', () => {
      expect(pokemon.getAltura()).to.be.equal(0.4);
    });
  });
  describe('Test de la función <<getPeso>>', () => {
    it('getPeso es una función', () => {
      expect(pokemon.getPeso).to.be.a('function');
    });
    it ('pokemon.getPeso() retorna 6', () => {
      expect(pokemon.getPeso()).to.be.equal(6);
    });
  });
  describe('Test de la función <<getTipo>>', () => {
    it('getTipo es una función', () => {
      expect(pokemon.getTipo).to.be.a('function');
    });
    it ('pokemon.getTipo() retorna electrico', () => {
      expect(pokemon.getTipo()).to.be.equal('electrico');
    });
  });
});