import 'mocha';
import { expect } from 'chai';
import { Combat } from '../../src/Ejercicio-01/combat';
import { Pokemon } from '../../src/Ejercicio-01/pokemon';

describe('Tests de la clase Combat', () => {
  var pokemonA: Pokemon;
  var pokemonB: Pokemon;
  var pokemonC: Pokemon;
  var pokemonD: Pokemon;
  var combat1: Combat;
  var combat2: Combat;
  var damageA: number;
  var damageB: number;
  var damageC: number;
  var damageD: number;
  beforeEach(() => {
    pokemonA = new Pokemon('Pikachu', 6, 0.4, 'electrico', 55, 40, 90, 35);
    pokemonB = new Pokemon('Bulbasaur', 6.9, 0.7, 'hierba', 49, 49, 45, 45);
    pokemonC = new Pokemon('Charizard', 90.5, 1.7, 'fuego', 84, 78, 100, 78);
    pokemonD = new Pokemon('Blastoise', 85.5, 1.6, 'agua', 83, 100, 78, 79);
    combat1 = new Combat(pokemonA, pokemonB);
    combat2 = new Combat(pokemonC, pokemonD);
    damageA = combat1.damage(pokemonA, pokemonB);
    damageB = combat1.damage(pokemonB, pokemonA);
    damageC = combat2.damage(pokemonC, pokemonD);
    damageD = combat2.damage(pokemonD, pokemonC);
  });
  describe('Test de la función <<damage>>', () => {
    it('damage es una función', () => {
      expect(combat1.damage).to.be.a('function');
    });
    it ('damage(pokemonA, pokemonB) retorna 56.12', () => {
      expect(combat1.damage(pokemonA, pokemonB)).to.be.equal(56.12);
    });
    it ('damage(pokemonB, pokemonA) retorna 61.25', () => {
      expect(combat1.damage(pokemonB, pokemonA)).to.be.equal(61.25);
    });
    it ('damage(pokemonC, pokemonD) retorna 21', () => {
      expect(combat2.damage(pokemonC, pokemonD)).to.be.equal(21);
    });
    it ('damage(pokemonD, pokemonC) retorna 106.41', () => {
      expect(combat2.damage(pokemonD, pokemonC)).to.be.equal(106.41);
    });
  });
  describe('Test de la función <<efectividad>>', () => {
    it('efectividad es una función', () => {
      expect(combat1.efectividad).to.be.a('function');
    });
    it ('efectividad(pokemonA, pokemonB) retorna 1', () => {
      expect(combat1.efectividad(pokemonA, pokemonB)).to.be.equal(1);
    });
    it ('efectividad(pokemonB, pokemonA) retorna 1', () => {
      expect(combat1.efectividad(pokemonB, pokemonA)).to.be.equal(1);
    });
    it ('efectividad(pokemonA, pokemonB) retorna 0.5', () => {
      expect(combat2.efectividad(pokemonC, pokemonD)).to.be.equal(0.5);
    });
    it ('efectividad(pokemonB, pokemonA) retorna 2', () => {
      expect(combat2.efectividad(pokemonD, pokemonC)).to.be.equal(2);
    });
  });
  describe('Test de la función <<combate>>', () => {
    it('combate es una función', () => {
      expect(combat1.combate).to.be.a('function');
    });
    it ('combate() retorna Pikachu', () => {
      expect(combat1.combate()).to.be.equal('Pikachu');
    });
    it ('combate() retorna Blastoise', () => {
      expect(combat2.combate()).to.be.equal('Blastoise');
    });
  });
  describe('Test de la función <<vida>>', () => {
    it('vida es una función', () => {
      expect(combat1.vida).to.be.a('function');
    });
    it ('vida() retorna undefined', () => {
      expect(combat1.vida(damageA)).to.be.equal(undefined);
    });
    it ('vida() retorna undefined', () => {
      combat2.setTurno(1);
      combat2.vida(damageC);
      expect(pokemonD.getHP()).to.be.equal(79);
    });
  });
  describe('Test de la función <<mostrarVida>>', () => {
    it('mostrarVida es una función', () => {
      expect(combat1.mostrarVida).to.be.a('function');
    });
    it ('mostrarVida() retorna undefined', () => {
      expect(combat1.mostrarVida()).to.be.equal(undefined);
    });
    it ('mostrarVida() retorna undefined', () => {
      expect(combat2.mostrarVida()).to.be.equal(undefined);
    });
  });
});