import { expect } from "chai";
import { add, divide, multiply, subtract } from '../src/mathUtils.js';

describe('Math Utils', () => {
  describe('Add', () => {
    it("Возвращает сумму двух чисел", () => {
      expect(add(3, 2)).to.equal(5);
    });
  });

  describe("Subtract", () => {
    it("Возвращает разницу двух чисел", () => {
      expect(subtract(5, 2)).to.equal(3);
    });
  });

  describe("Multiply", () => {
    it("Возвращает произведение двух чисел", () => {
      expect(multiply(4, 5)).to.equal(20);
    });
  });

  describe("Divide", () => {
    it("Возвращает частное двух чисел", () => {
      expect(divide(6, 2)).to.equal(3);
    });
    it('Ошибка при делении на ноль', () => {
      expect(() => divide(5, 0)).to.throw("Cannot divide by zero");
    });
  });
});
