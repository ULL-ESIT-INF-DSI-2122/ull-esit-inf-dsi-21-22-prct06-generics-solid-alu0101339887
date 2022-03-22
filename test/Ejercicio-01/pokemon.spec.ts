import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../src/Ejercicio-01/pokemon';

describe('Tests de la clase Pokemon', () => {
  var pokemonA: Pokemon;
  var pokemonB: Pokemon;
  var pokemonC: Pokemon;
  var pokemonD: Pokemon;
  beforeEach(() => {
    pokemonA = new Pokemon('Pikachu', 6, 0.4, 'electrico', 55, 40, 90, 35);
    pokemonB = new Pokemon('Bulbasaur', 6.9, 0.7, 'hierba', 49, 49, 45, 45);
    pokemonC = new Pokemon('Charizard', 90.5, 1.7, 'fuego', 84, 78, 100, 78);
    pokemonD = new Pokemon('Blastoise', 85.5, 1.6, 'agua', 83, 100, 78, 79);
  });
  describe('Test de la función <<getAltura>>', () => {
    it('getAltura es una función', () => {
      expect(pokemonA.getAltura).to.be.a('function');
    });
    it ('pokemonA.getAltura() retorna 0.4', () => {
      expect(pokemonA.getAltura()).to.be.equal(0.4);
    });
    it ('pokemonB.getAltura() retorna 0.7', () => {
      expect(pokemonB.getAltura()).to.be.equal(0.7);
    });
    it ('pokemonC.getAltura() retorna 1.7', () => {
      expect(pokemonC.getAltura()).to.be.equal(1.7);
    });
    it ('pokemonD.getAltura() retorna 1.6', () => {
      expect(pokemonD.getAltura()).to.be.equal(1.6);
    });
  });
  describe('Test de la función <<getAtaque>>', () => {
    it('getAtaque es una función', () => {
      expect(pokemonA.getAtaque).to.be.a('function');
    });
    it ('pokemonA.getAtaque() retorna 55', () => {
      expect(pokemonA.getAtaque()).to.be.equal(55);
    });
    it ('pokemonB.getAtaque() retorna 49', () => {
      expect(pokemonB.getAtaque()).to.be.equal(49);
    });
    it ('pokemonC.getAtaque() retorna 84', () => {
      expect(pokemonC.getAtaque()).to.be.equal(84);
    });
    it ('pokemonD.getAtaque() retorna 83', () => {
      expect(pokemonD.getAtaque()).to.be.equal(83);
    });
  });
  describe('Test de la función <<getDefensa>>', () => {
    it('getDefensa es una función', () => {
      expect(pokemonA.getDefensa).to.be.a('function');
    });
    it ('pokemonA.getDefensa() retorna 40', () => {
      expect(pokemonA.getDefensa()).to.be.equal(40);
    });
    it ('pokemonB.getDefensa() retorna 49', () => {
      expect(pokemonB.getDefensa()).to.be.equal(49);
    });
    it ('pokemonC.getDefensa() retorna 78', () => {
      expect(pokemonC.getDefensa()).to.be.equal(78);
    });
    it ('pokemonD.getDefensa() retorna 100', () => {
      expect(pokemonD.getDefensa()).to.be.equal(100);
    });
  });
  describe('Test de la función <<getHP>>', () => {
    it('getHP es una función', () => {
      expect(pokemonA.getHP).to.be.a('function');
    });
    it ('pokemonA.getHP() retorna 35', () => {
      expect(pokemonA.getHP()).to.be.equal(35);
    });
    it ('pokemonB.getHP() retorna 45', () => {
      expect(pokemonB.getHP()).to.be.equal(45);
    });
    it ('pokemonC.getHP() retorna 78', () => {
      expect(pokemonC.getHP()).to.be.equal(78);
    });
    it ('pokemonD.getHP() retorna 79', () => {
      expect(pokemonD.getHP()).to.be.equal(79);
    });
  });
  describe('Test de la función <<getNombre>>', () => {
    it('getNombre es una función', () => {
      expect(pokemonA.getNombre).to.be.a('function');
    });
    it ('pokemonA.getNombre() retorna Pikachu', () => {
      expect(pokemonA.getNombre()).to.be.equal('Pikachu');
    });
    it ('pokemonB.getNombre() retorna Bulbasaur', () => {
      expect(pokemonB.getNombre()).to.be.equal('Bulbasaur');
    });
    it ('pokemonC.getNombre() retorna Charizard', () => {
      expect(pokemonC.getNombre()).to.be.equal('Charizard');
    });
    it ('pokemonD.getNombre() retorna Blastoise', () => {
      expect(pokemonD.getNombre()).to.be.equal('Blastoise');
    });
  });
  describe('Test de la función <<getPeso>>', () => {
    it('getPeso es una función', () => {
      expect(pokemonA.getPeso).to.be.a('function');
    });
    it ('pokemonA.getPeso() retorna 6', () => {
      expect(pokemonA.getPeso()).to.be.equal(6);
    });
    it ('pokemonB.getPeso() retorna 6.9', () => {
      expect(pokemonB.getPeso()).to.be.equal(6.9);
    });
    it ('pokemonC.getPeso() retorna 90.5', () => {
      expect(pokemonC.getPeso()).to.be.equal(90.5);
    });
    it ('pokemonD.getPeso() retorna 85.5', () => {
      expect(pokemonD.getPeso()).to.be.equal(85.5);
    });
  });
  describe('Test de la función <<getTipo>>', () => {
    it('getTipo es una función', () => {
      expect(pokemonA.getTipo).to.be.a('function');
    });
    it ('pokemonA.getTipo() retorna electrico', () => {
      expect(pokemonA.getTipo()).to.be.equal('electrico');
    });
    it ('pokemonB.getTipo() retorna hierba', () => {
      expect(pokemonB.getTipo()).to.be.equal('hierba');
    });
    it ('pokemonC.getTipo() retorna fuego', () => {
      expect(pokemonC.getTipo()).to.be.equal('fuego');
    });
    it ('pokemonD.getTipo() retorna agua', () => {
      expect(pokemonD.getTipo()).to.be.equal('agua');
    });
  });
  describe('Test de la función <<getVelocidad>>', () => {
    it('getVelocidad es una función', () => {
      expect(pokemonA.getVelocidad).to.be.a('function');
    });
    it ('pokemonA.getVelocidad() retorna 90', () => {
      expect(pokemonA.getVelocidad()).to.be.equal(90);
    });
    it ('pokemonB.getVelocidad() retorna 45', () => {
      expect(pokemonB.getVelocidad()).to.be.equal(45);
    });
    it ('pokemonC.getVelocidad() retorna 100', () => {
      expect(pokemonC.getVelocidad()).to.be.equal(100);
    });
    it ('pokemonD.getVelocidad() retorna 78', () => {
      expect(pokemonD.getVelocidad()).to.be.equal(78);
    });
  });
});