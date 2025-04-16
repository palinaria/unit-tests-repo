import { expect } from "chai";
import { capitalize, reverseString, isPalindrome } from '../src/stringUtils.js';

describe('String Utils', () => {
  describe('capitalize', () => {
    it("Capitalizes the first letter of the string", () => {
      expect(capitalize('chanel')).to.equal('Chanel');
    });

    it('Throws an error if input is not a string', () => {
      expect(() => capitalize(123)).to.throw("Input must be a string");
    });
  });

  describe('reverseString', () => {
    it("Reverses the string", () => {
      expect(reverseString('drawer')).to.equal('reward');
    });

    it('Throws an error if input is not a string', () => {
      expect(() => reverseString(true)).to.throw("Input must be a string");
    });
  });

  describe('isPalindrome', () => {
    it("Returns true for palindromes", () => {
      expect(isPalindrome('madam')).to.be.true;
    });

    it("Returns false for non-palindromes", () => {
      expect(isPalindrome('hello')).to.be.false;
    });

    it('Throws an error if input is not a string', () => {
      expect(() => isPalindrome(123)).to.throw("Input must be a string");
    });
  });
});