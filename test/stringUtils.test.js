import { expect } from "chai";
import { capitalize, reverseString, isPalindrome } from '../src/stringUtils.js';

describe('String Utils', () => {
  describe('capitalize', () => {
    it("Делает первую букву заглавной", () => {
      expect(capitalize('chanel')).to.equal('Chanel');
    });

    it('Выбрасывает ошибку, если входной параметр не строка', () => {
      expect(() => capitalize(123)).to.throw("Input must be a string");
    });
  });

  describe('reverseString', () => {
    it("Отражает строку", () => {
      expect(reverseString('drawer')).to.equal('reward');
    });

    it('Выбрасывает ошибку, если входной параметр не строка', () => {
      expect(() => reverseString(true)).to.throw("Input must be a string");
    });
  });

  describe('isPalindrome', () => {
    it("Определяет палиндромы", () => {
      expect(isPalindrome('madam')).to.be.true;
    });

    it("Не определяет как палиндром ", () => {
      expect(isPalindrome('hello')).to.be.false;
    });

    it('Выбрасывает ошибку, если входной параметр не строка', () => {
      expect(() => isPalindrome(123)).to.throw("Input must be a string");
    });
  });
});
