import 'mocha';
import { expect } from 'chai';

import { Pokemon } from '../../src/Ejercicio-01/Pokemon';
import { PokemonCalc } from '../../src/Ejercicio-01/PokemonCalc';

describe('Tests de la clase Fighter', () => {
  var pokemon: Pokemon;
  var pokemonCalc: PokemonCalc;
  beforeEach(() => {
    pokemon = new Pokemon(6, 0.4, 'electrico');
    pokemonCalc = new PokemonCalc('Pikachu', 55, 40, 90, 35, pokemon);
  });
  describe('Test de la función <<getAltura>>', () => {
    it('getAltura es una función', () => {
      expect(pokemon.getAltura).to.be.a('function');
    });
    it ('pokemon.getAltura() retorna 0.4', () => {
      expect(pokemon.getAltura()).to.be.equal(0.4);
    });
  });
  describe('Test de la función <<getAtaque>>', () => {
    it('getAtaque es una función', () => {
      expect(pokemonCalc.getAtaque).to.be.a('function');
    });
    it ('pokemon.getAtaque() retorna 55', () => {
      expect(pokemonCalc.getAtaque()).to.be.equal(55);
    });
  });
  describe('Test de la función <<getDefensa>>', () => {
    it('getDefensa es una función', () => {
      expect(pokemonCalc.getDefensa).to.be.a('function');
    });
    it ('pokemon.getDefensa() retorna 40', () => {
      expect(pokemonCalc.getDefensa()).to.be.equal(40);
    });
  });
  describe('Test de la función <<getHP>>', () => {
    it('getHP es una función', () => {
      expect(pokemonCalc.getHP).to.be.a('function');
    });
    it ('pokemon.getHP() retorna 35', () => {
      expect(pokemonCalc.getHP()).to.be.equal(35);
    });
  });
  describe('Test de la función <<getNombre>>', () => {
    it('getNombre es una función', () => {
      expect(pokemonCalc.getNombre).to.be.a('function');
    });
    it ('pokemon.getNombre() retorna Pikachu', () => {
      expect(pokemonCalc.getNombre()).to.be.equal('Pikachu');
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
  describe('Test de la función <<getVelocidad>>', () => {
    it('getVelocidad es una función', () => {
      expect(pokemonCalc.getVelocidad).to.be.a('function');
    });
    it ('pokemon.getVelocidad() retorna 90', () => {
      expect(pokemonCalc.getVelocidad()).to.be.equal(90);
    });
  });
});