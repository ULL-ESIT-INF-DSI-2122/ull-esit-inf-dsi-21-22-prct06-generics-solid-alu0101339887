import 'mocha';
import { expect } from 'chai';

import { Pokemon } from '../../src/Ejercicio-01/Pokemon';
import { PokemonCalc } from '../../src/Ejercicio-01/PokemonCalc';

import { Marvel } from '../../src/Ejercicio-01/Marvel';
import { MarvelCalc } from '../../src/Ejercicio-01/MarvelCalc';

describe('Tests de la clase PokemonClac', () => {
  var pokemonA: Pokemon;
  var pokemonB: Pokemon;
  var pokemonC: Pokemon;
  var pokemonD: Pokemon;
  var marvel: Marvel;
  var pokemonCalcA: PokemonCalc;
  var pokemonCalcB: PokemonCalc;
  var pokemonCalcC: PokemonCalc;
  var pokemonCalcD: PokemonCalc;
  var marvelCalc: MarvelCalc;
  beforeEach(() => {
    pokemonA = new Pokemon(6, 0.4, 'electrico');
    pokemonB = new Pokemon(6.9, 0.7, 'hierba');
    pokemonC = new Pokemon(90.5, 1.7, 'fuego');
    pokemonD = new Pokemon(85.5, 1.6, 'agua');
    marvel = new Marvel(60, 'telaraña');
    pokemonCalcA = new PokemonCalc('Pikachu', 55, 40, 90, 35, pokemonA);
    pokemonCalcB = new PokemonCalc('Bulbasaur', 49, 49, 45, 45, pokemonB);
    pokemonCalcC = new PokemonCalc('Charizard', 84, 78, 100, 78, pokemonC);
    pokemonCalcD = new PokemonCalc('Blastoise', 83, 100, 78, 79, pokemonD);
    marvelCalc = new MarvelCalc('Spiderman',  90, 60, 60, 65, marvel);
  });
    describe('Test de la función <<efectividad>>', () => {
      it('efectividad es una función', () => {
        expect(pokemonCalcA.efectividad).to.be.a('function');
      });
      it ('efectividad(pokemonA, pokemonB) retorna 1', () => {
        expect(pokemonCalcA.efectividad(pokemonA.getTipo(), pokemonB.getTipo())).to.be.equal(1);
      });
      it ('efectividad(pokemonB, pokemonA) retorna 1', () => {
        expect(pokemonCalcA.efectividad(pokemonB.getTipo(), pokemonA.getTipo())).to.be.equal(1);
      });
      it ('efectividad(pokemonA, pokemonB) retorna 0.5', () => {
        expect(pokemonCalcB.efectividad(pokemonC.getTipo(), pokemonD.getTipo())).to.be.equal(0.5);
      });
      it ('efectividad(pokemonB, pokemonA) retorna 2', () => {
        expect(pokemonCalcB.efectividad(pokemonD.getTipo(), pokemonC.getTipo())).to.be.equal(2);
      });
    });
    describe('Test de la función <<damage>>', () => {
      it('damage es una función', () => {
        expect(pokemonCalcA.damage).to.be.a('function');
      });
      it ('damage(pokemonCalcB) retorna 11.22', () => {
        expect(pokemonCalcA.damage(pokemonCalcB)).to.be.equal(11.22);
      });
      it ('damage(pokemonCalcA) retorna 12.25', () => {
        expect(pokemonCalcB.damage(pokemonCalcA)).to.be.equal(12.25);
      });
      it ('damage(pokemonCalcD) retorna 8.4', () => {
        expect(pokemonCalcC.damage(pokemonCalcD)).to.be.equal(8.4);
      });
      it ('damage(pokemonCalcC) retorna 10.64', () => {
        expect(pokemonCalcD.damage(pokemonCalcC)).to.be.equal(10.64);
      });
      it ('damage(marvelCalc) retorna 13.83', () => {
        expect(pokemonCalcD.damage(marvelCalc)).to.be.equal(13.83);
      });
    });
});