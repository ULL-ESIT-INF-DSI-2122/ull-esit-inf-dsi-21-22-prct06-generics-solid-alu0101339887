import 'mocha';
import { expect } from 'chai';

import { Marvel } from '../../src/Ejercicio-01/Marvel';
import { MarvelCalc } from '../../src/Ejercicio-01/MarvelCalc';

import { Pokemon } from '../../src/Ejercicio-01/Pokemon';
import { PokemonCalc } from '../../src/Ejercicio-01/PokemonCalc';

describe('Tests de la clase MarvelCalc', () => {
  var marvelA: Marvel;
  var marvelB: Marvel;
  var marvelC: Marvel;
  var marvelD: Marvel;
  var pokemon: Pokemon;
  var marvelCalcA: MarvelCalc;
  var marvelCalcB: MarvelCalc;
  var marvelCalcC: MarvelCalc;
  var marvelCalcD: MarvelCalc;
  var pokemonCalc: PokemonCalc;
  beforeEach(() => {
    marvelA = new Marvel(60, 'telaraña');
    marvelB = new Marvel(70, 'fuerza');
    marvelC = new Marvel(90, 'magia');
    marvelD = new Marvel(85, 'martillo');
    pokemon = new Pokemon(85.5, 1.6, 'agua');
    marvelCalcA = new MarvelCalc('Spiderman',  90, 60, 60, 65, marvelA);
    marvelCalcB = new MarvelCalc('Hulk', 69, 69, 65, 65, marvelB);
    marvelCalcC = new MarvelCalc('Doctor Strange', 84, 78, 100, 78, marvelC);
    marvelCalcD = new MarvelCalc('Thor', 83, 100, 78, 79, marvelD);
    pokemonCalc = new PokemonCalc('Blastoise', 83, 100, 78, 79, pokemon);
  });
    describe('Test de la función <<efectividad>>', () => {
      it('efectividad es una función', () => {
        expect(marvelCalcA.efectividad).to.be.a('function');
      });
      it ('efectividad(marvelA, marvelB) retorna 0.5', () => {
        expect(marvelCalcA.efectividad(marvelC.getPoder(), marvelB.getPoder())).to.be.equal(0.5);
      });
      it ('efectividad(marvelB, marvelA) retorna 1', () => {
        expect(marvelCalcA.efectividad(marvelB.getPoder(), marvelA.getPoder())).to.be.equal(1);
      });
      it ('efectividad(marvelA, marvelB) retorna 0.5', () => {
        expect(marvelCalcB.efectividad(marvelB.getPoder(), marvelC.getPoder())).to.be.equal(0.5);
      });
    });
    describe('Test de la función <<damage>>', () => {
      it('damage es una función', () => {
        expect(marvelCalcA.damage).to.be.a('function');
      });
      it ('damage(marvelCalcB) retorna 13.04', () => {
        expect(marvelCalcA.damage(marvelCalcB)).to.be.equal(13.04);
      });
      it ('damage(marvelCalcA) retorna 11.5', () => {
        expect(marvelCalcB.damage(marvelCalcA)).to.be.equal(11.5);
      });
      it ('damage(marvelCalcD) retorna 8.4', () => {
        expect(marvelCalcC.damage(marvelCalcD)).to.be.equal(8.4);
      });
      it ('damage(marvelCalcC) retorna 10.64', () => {
        expect(marvelCalcD.damage(marvelCalcC)).to.be.equal(10.64);
      });
      it ('damage(pokemonCalc) retorna 8.3', () => {
        expect(marvelCalcD.damage(pokemonCalc)).to.be.equal(8.3);
      });
    });
});