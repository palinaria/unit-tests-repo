import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../src/arrayUtils.js';

describe('Array Utils', () => {
  describe('findMax', () => {
    it('Returns the maximum number from the array', () => {
      expect(findMax([1, 5, 3])).to.equal(5);
    });

    it('Throws an error if input is not an array', () => {
      expect(() => findMax('not array')).to.throw('Input must be an array');
    });
  });

  describe('findMin', () => {
    it('Returns the minimum number from the array', () => {
      expect(findMin([4, 6, 8])).to.equal(4);
    });

    it('Throws an error if input is not an array', () => {
      expect(() => findMin('not array')).to.throw('Input must be an array');
    });
  });

  describe('removeDuplicates', () => {
    it('Removes duplicate elements from the array', () => {
      expect(removeDuplicates([1, 2, 2, 3])).to.deep.equal([1, 2, 3]);
    });

    it('Throws an error if input is not an array', () => {
      expect(() => removeDuplicates('not array')).to.throw('Input must be an array');
    });
  });
});