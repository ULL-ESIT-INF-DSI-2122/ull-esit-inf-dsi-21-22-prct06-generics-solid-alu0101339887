import 'mocha';
import { expect } from 'chai';

import { Destiny } from '../../src/Ejercicio-01/Destiny';
import { DestinyCalc } from '../../src/Ejercicio-01/DestinyCalc';

import { Marvel } from '../../src/Ejercicio-01/Marvel';
import { MarvelCalc } from '../../src/Ejercicio-01/MarvelCalc';

describe('Tests de la clase DestinyClac', () => {
  var destinyA: Destiny;
  var destinyB: Destiny;
  var destinyC: Destiny;
  var destinyD: Destiny;
  var marvel: Marvel;
  var destinyCalcA: DestinyCalc;
  var destinyCalcB: DestinyCalc;
  var destinyCalcC: DestinyCalc;
  var destinyCalcD: DestinyCalc;
  var marvelCalc: MarvelCalc;
  beforeEach(() => {
    destinyA = new Destiny('mago', 40);
    destinyB = new Destiny('tanque', 30);
    destinyC = new Destiny('ágil', 50);
    destinyD = new Destiny('mago', 50);
    marvel = new Marvel(60, 'telaraña');
    destinyCalcA = new DestinyCalc('Witcher', 55, 40, 90, 35, destinyA);
    destinyCalcB = new DestinyCalc('Tank', 49, 49, 45, 45, destinyB);
    destinyCalcC = new DestinyCalc('Agil', 84, 78, 100, 78, destinyC);
    destinyCalcD = new DestinyCalc('Mago', 83, 100, 78, 79, destinyD);
    marvelCalc = new MarvelCalc('Spiderman',  90, 60, 60, 65, marvel);
  });
    describe('Test de la función <<efectividad>>', () => {
      it('efectividad es una función', () => {
        expect(destinyCalcA.efectividad).to.be.a('function');
      });
      it ('efectividad(destinyA, destinyB) retorna 2', () => {
        expect(destinyCalcA.efectividad(destinyA.getNaturaleza(), destinyB.getNaturaleza())).to.be.equal(2);
      });
      it ('efectividad(destinyB, destinyA) retorna 0.5', () => {
        expect(destinyCalcA.efectividad(destinyB.getNaturaleza(), destinyA.getNaturaleza())).to.be.equal(0.5);
      });
      it ('efectividad(destinyA, destinyB) retorna 2', () => {
        expect(destinyCalcB.efectividad(destinyC.getNaturaleza(), destinyD.getNaturaleza())).to.be.equal(2);
      });
      it ('efectividad(destinyB, destinyA) retorna 0.5', () => {
        expect(destinyCalcB.efectividad(destinyD.getNaturaleza(), destinyC.getNaturaleza())).to.be.equal(0.5);
      });
    });
    describe('Test de la función <<damage>>', () => {
      it('damage es una función', () => {
        expect(destinyCalcA.damage).to.be.a('function');
      });
      it ('damage(destinyCalcB) retorna 11.22', () => {
        expect(destinyCalcA.damage(destinyCalcB)).to.be.equal(11.22);
      });
      it ('damage(destinyCalcA) retorna 12.25', () => {
        expect(destinyCalcB.damage(destinyCalcA)).to.be.equal(12.25);
      });
      it ('damage(destinyCalcD) retorna 8.4', () => {
        expect(destinyCalcC.damage(destinyCalcD)).to.be.equal(8.4);
      });
      it ('damage(destinyCalcC) retorna 10.64', () => {
        expect(destinyCalcD.damage(destinyCalcC)).to.be.equal(10.64);
      });
      it ('damage(marvelCalc) retorna 13.83', () => {
        expect(destinyCalcD.damage(marvelCalc)).to.be.equal(13.83);
      });
    });
});