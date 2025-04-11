import { expect } from "chai";
import { filterUsersByAge, sortUsersByName, findUserById, isEmailTaken } from '../src/usersListUtils.js';

describe('Users List Utils', () => {
  describe('filterUsersByAge', () => {
    it("Фильтрует пользователей по возрасту", () => {
      const users = [
        { id: 1, age: 20 },
        { id: 2, age: 25 },
        { id: 3, age: 30 },
      ];
      expect(filterUsersByAge(users, 20, 27)).to.deep.equal([
        { id: 1, age: 20 },
        { id: 2, age: 25 },
      ]);
    });

    it('Выбрасывает ошибку, если входной параметр не массив', () => {
      expect(() => filterUsersByAge('not array', 20, 30)).to.throw('Users must be an array');
    });
  });

  describe('sortUsersByName', () => {
    it("Сортирует пользователей по имени", () => {
      const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Alice' },
        { id: 3, name: 'Bob' },
      ];
      expect(sortUsersByName(users)).to.deep.equal([
        { id: 2, name: 'Alice' },
        { id: 3, name: 'Bob' },
        { id: 1, name: 'John' },
      ]);
    });

    it('Выбрасывает ошибку, если входной параметр не массив', () => {
      expect(() => sortUsersByName('not array')).to.throw('Users must be an array');
    });
  });

  describe('findUserById', () => {
    it("Находит пользователя по ID", () => {
      const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Alice' },
      ];
      expect(findUserById(users, 2)).to.deep.equal({ id: 2, name: 'Alice' });
    });

    it('Выбрасывает ошибку, если входной параметр не массив', () => {
      expect(() => findUserById('not array', 1)).to.throw('Users must be an array');
    });
  });

  describe('isEmailTaken', () => {
    it("Проверяет, существует ли пользователь с указанным email", () => {
      const users = [
        { id: 1, email: 'john@example.com' },
        { id: 2, email: 'alice@example.com' },
      ];
      expect(isEmailTaken(users, 'john@example.com')).to.be.true;
    });

    it('Выбрасывает ошибку, если входной параметр не массив', () => {
      expect(() => isEmailTaken('not array', 'test@example.com')).to.throw('Users must be an array');
    });
  });
});
