import 'mocha';
import { expect } from 'chai';
import { Pokedex } from '../../src/Ejercicio-01/pokedex';
import { Pokemon } from '../../src/Ejercicio-01/pokemon';

describe('Tests de la clase Pokedex', () => {
  var pokemonA: Pokemon;
  var pokemonB: Pokemon;
  var pokemonC: Pokemon;
  var pokemonD: Pokemon;
  var pokedex: Pokedex;
  var pokedex2: Pokedex;
  beforeEach(() => {
    pokemonA = new Pokemon('Pikachu', 6, 0.4, 'electrico', 55, 40, 90, 35);
    pokemonB = new Pokemon('Bulbasaur', 6.9, 0.7, 'hierba', 49, 49, 45, 45);
    pokemonC = new Pokemon('Charizard', 90.5, 1.7, 'fuego', 84, 78, 100, 78);
    pokemonD = new Pokemon('Blastoise', 85.5, 1.6, 'agua', 83, 100, 78, 79);
    pokedex = new Pokedex([pokemonA, pokemonB]);
    pokedex2 = new Pokedex([pokemonA, pokemonB, pokemonC, pokemonD]);
  });
  describe('Test de la función <<add>>', () => {
    it('add es una función', () => {
      expect(pokedex.add).to.be.a('function');
    });
    it ('Al usar add(pokemonC) debe añadirse el nuevo pokemon a la pokedex', () => {
      pokedex.add(pokemonC);
      expect(pokedex.getPokes()).to.deep.equal([pokemonA, pokemonB, pokemonC]);
    });
    it ('Al usar add(pokemonD) debe añadirse el nuevo pokemon a la pokedex', () => {
      pokedex.add(pokemonC);
      pokedex.add(pokemonD);
      expect(pokedex.getPokes()).to.deep.equal([pokemonA, pokemonB, pokemonC, pokemonD]);
    });
  });
  describe('Test de la función <<getPokes>>', () => {
    it('getPokes es una función', () => {
      expect(pokedex.getPokes).to.be.a('function');
    });
    it ('pokedex.getPokes() retorna [pokemonA, pokemonB]', () => {
      expect(pokedex.getPokes()).to.deep.equal([pokemonA, pokemonB]);
    });
    it ('pokedex2.getPokes() retorna [pokemonA, pokemonB]', () => {
      expect(pokedex2.getPokes()).to.deep.equal([pokemonA, pokemonB, pokemonC, pokemonD]);
    });
  });
});