import 'mocha';
import { expect } from 'chai';
import { Marvel } from '../../src/Ejercicio-01/Marvel';

describe('Tests de la clase Marvel', () => {
  var marvel: Marvel;
  beforeEach(() => {
    marvel = new Marvel(60, 'telaraña');
  });
  describe('Test de la función <<getPoder>>', () => {
    it('getPoder es una función', () => {
      expect(marvel.getPoder).to.be.a('function');
    });
    it ('marvel.getPoder() retorna telaraña', () => {
      expect(marvel.getPoder()).to.be.equal("telaraña");
    });
  });
  describe('Test de la función <<getExperiencia>>', () => {
    it('getExperiencia es una función', () => {
      expect(marvel.getExperiencia).to.be.a('function');
    });
    it ('marvel.getExperiencia() retorna 60', () => {
      expect(marvel.getExperiencia()).to.be.equal(60);
    });
  });
});