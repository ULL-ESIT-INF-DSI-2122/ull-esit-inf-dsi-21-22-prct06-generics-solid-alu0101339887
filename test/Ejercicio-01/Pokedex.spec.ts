import 'mocha';
import { expect } from 'chai';
import { Pokedex } from '../../src/Ejercicio-01/Pokedex';

import { Pokemon } from '../../src/Ejercicio-01/Pokemon';
import { PokemonCalc } from '../../src/Ejercicio-01/PokemonCalc';

import { Marvel } from '../../src/Ejercicio-01/Marvel';
import { MarvelCalc } from '../../src/Ejercicio-01/MarvelCalc';

import { Destiny } from '../../src/Ejercicio-01/Destiny';
import { DestinyCalc } from '../../src/Ejercicio-01/DestinyCalc';

describe('Tests de la clase Pokedex', () => {
  var pokemon: Pokemon;
  var destiny: Destiny;
  var marvel: Marvel;
  var pokemonCalc: PokemonCalc;
  var destinyCalc: DestinyCalc;
  var marvelCalc: MarvelCalc;
  var pokedex: Pokedex;
  var pokedex2: Pokedex;
  beforeEach(() => {
    pokemon = new Pokemon(6, 0.4, 'electrico');
    destiny = new Destiny('mago', 40);
    marvel = new Marvel(60, 'telaraña');
    pokemonCalc = new PokemonCalc('Pikachu', 55, 40, 90, 35, pokemon);
    destinyCalc = new DestinyCalc('Witcher',  60, 50, 70, 45, destiny);
    marvelCalc = new MarvelCalc('Spiderman',  90, 60, 60, 65, marvel);
    pokedex = new Pokedex([pokemonCalc, destinyCalc]);
    pokedex2 = new Pokedex([pokemonCalc]);
  });
  describe('Test de la función <<add>>', () => {
    it('add es una función', () => {
      expect(pokedex.add).to.be.a('function');
    });
    it ('Al usar add(marvelCalc) debe añadirse el nuevo luchador a la pokedex', () => {
      pokedex.add(marvelCalc);
      expect(pokedex.getFighters()).to.deep.equal([pokemonCalc, destinyCalc, marvelCalc]);
    });
  });
  describe('Test de la función <<getFighters>>', () => {
    it('getPokes es una función', () => {
      expect(pokedex.getFighters).to.be.a('function');
    });
    it ('pokedex.getFighters() retorna [pokemonCalc, destinyCalc]', () => {
      expect(pokedex.getFighters()).to.deep.equal([pokemonCalc, destinyCalc]);
    });
    it ('pokedex2.getFighters() retorna [pokemonCalc]', () => {
      expect(pokedex2.getFighters()).to.deep.equal([pokemonCalc]);
    });
  });
});