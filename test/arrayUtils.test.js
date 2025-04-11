import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../src/arrayUtils.js';

describe('Array Utils', () => {
  describe('findMax', () => {
    it('Возвращает максимальное число из массива', () => {
      expect(findMax([1, 5, 3])).to.equal(5);
    });

    it('Выбрасывает ошибку, если входной параметр не массив', () => {
      expect(() => findMax('not array')).to.throw('Input must be an array');
    });
  });

  describe('findMin', () => {
    it('Возвращает минимальное число из массива', () => {
      expect(findMin([4, 6, 8])).to.equal(4);
    });

    it('Выбрасывает ошибку, если входной параметр не массив', () => {
      expect(() => findMin('not array')).to.throw('Input must be an array');
    });
  });

  describe('removeDuplicates', () => {
    it('Удаляет дубликаты', () => {
      expect(removeDuplicates([1, 2, 2, 3])).to.deep.equal([1, 2, 3]);
    });

    it('Выбрасывает ошибку, если входной параметр не массив', () => {
      expect(() => removeDuplicates('not array')).to.throw('Input must be an array');
    });
  });
});
