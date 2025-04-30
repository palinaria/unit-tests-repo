import { expect } from 'chai';
import { add, divide, multiply, subtract } from '../src/mathUtils.js';

describe('Math Utils', () => {
  describe('Add', () => {
    it('Returns the sum of two numbers', () => {
      expect(add(3, 2)).to.equal(5);
    });
  });

  describe('Subtract', () => {
    it('Returns the difference of two numbers', () => {
      expect(subtract(5, 2)).to.equal(3);
    });
  });

  describe('Multiply', () => {
    it('Returns the product of two numbers', () => {
      expect(multiply(4, 5)).to.equal(20);
    });
  });

  describe('Divide', () => {
    it('Returns the quotient of two numbers', () => {
      expect(divide(6, 2)).to.equal(3);
    });

    it('Throws an error when dividing by zero', () => {
      expect(() => divide(5, 0)).to.throw('Cannot divide by zero');
    });
  });
});
