import 'mocha';
import { expect } from 'chai';
import { Destiny } from '../../src/Ejercicio-01/Destiny';

describe('Tests de la clase Destiny', () => {
  var destiny: Destiny;
  beforeEach(() => {
    destiny = new Destiny('mago', 40);
  });
  describe('Test de la función <<getNaturaleza>>', () => {
    it('getNaturaleza es una función', () => {
      expect(destiny.getNaturaleza).to.be.a('function');
    });
    it ('destiny.getNaturaleza() retorna mago', () => {
      expect(destiny.getNaturaleza()).to.be.equal("mago");
    });
  });
  describe('Test de la función <<getAtaqueEspecial>>', () => {
    it('getAtaqueEspecial es una función', () => {
      expect(destiny.getAtaqueEspecial).to.be.a('function');
    });
    it ('destiny.getAtaqueEspecial() retorna 40', () => {
      expect(destiny.getAtaqueEspecial()).to.be.equal(40);
    });
  });
});