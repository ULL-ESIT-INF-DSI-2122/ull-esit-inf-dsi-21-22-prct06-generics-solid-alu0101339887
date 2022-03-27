import 'mocha';
import { expect } from 'chai';
import { Combat } from '../../src/Ejercicio-01/Combat';
import { CombatCalc } from '../../src/Ejercicio-01/CombatCalc';
import { CombatPrinter } from '../../src/Ejercicio-01/CombatPrinter';

import { Pokemon } from '../../src/Ejercicio-01/Pokemon';
import { PokemonCalc } from '../../src/Ejercicio-01/PokemonCalc';

import { Marvel } from '../../src/Ejercicio-01/Marvel';
import { MarvelCalc } from '../../src/Ejercicio-01/MarvelCalc';


describe('Tests de la clase Combat', () => {
  var pokemon: Pokemon;
  // var destiny: Destiny;
  var marvel: Marvel;
  var pokemonCalc: PokemonCalc;
  var marvelCalc: MarvelCalc;
  var combat: Combat;
  var combatPrinter: CombatPrinter;
  var combatCalc: CombatCalc;
  var combat2: Combat;
  var combatPrinter2: CombatPrinter;
  var combatCalc2: CombatCalc;
  var damageA: number;
  var damageB: number;
  beforeEach(() => {
    pokemon = new Pokemon(6, 0.4, 'electrico');
    marvel = new Marvel(60, 'telaraña');
    pokemonCalc = new PokemonCalc('Pikachu', 55, 40, 90, 35, pokemon);
    marvelCalc = new MarvelCalc('Spiderman', 55, 40, 90, 35, marvel);
    combat = new Combat();
    combatPrinter = new CombatPrinter(combat, pokemonCalc, marvelCalc);
    combatCalc = new CombatCalc(combat, pokemonCalc, marvelCalc, combatPrinter);
    combat2 = new Combat();
    combatPrinter2 = new CombatPrinter(combat2, marvelCalc, pokemonCalc);
    combatCalc2 = new CombatCalc(combat2, marvelCalc, pokemonCalc, combatPrinter2);
    damageA = pokemonCalc.damage(marvelCalc);
    damageB = marvelCalc.damage(pokemonCalc);
  });
  describe('Test de la función <<combate>>', () => {
    it('combate es una función', () => {
      expect(combatCalc.combate).to.be.a('function');
    });
    it ('combate() retorna Pikachu', () => {
      expect(combatCalc.combate()).to.be.equal('Pikachu');
    });
    it ('combate() retorna Spiderman', () => {
      expect(combatCalc2.combate()).to.be.equal('Spiderman');
    });
  });
  describe('Test de la función <<vida>>', () => {
    it('vida es una función', () => {
      expect(combatCalc.vida).to.be.a('function');
    });
    it ('vida() no retorna nada', () => {
      expect(combatCalc.vida(damageA)).not.to.throw;
    });
  });
  describe('Test de la función <<mostrarVida>>', () => {
    it('mostrarVida es una función', () => {
      expect(combatPrinter.mostrarVida).to.be.a('function');
    });
    it ('mostrarVida() retorna undefined', () => {
      expect(combatPrinter.mostrarVida()).to.be.equal(undefined);
    });
    it ('mostrarVida() retorna undefined', () => {
      expect(combatPrinter.mostrarVida()).to.be.equal(undefined);
    });
  });
});