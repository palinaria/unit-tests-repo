import { expect } from 'chai';
import { filterUsersByAge, sortUsersByName, findUserById, isEmailTaken } from '../src/usersListUtils.js';

describe('Users List Utils', () => {
  describe('filterUsersByAge', () => {
    it('Filters users by age range', () => {
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

    it('Throws an error if input is not an array', () => {
      expect(() => filterUsersByAge('not array', 20, 30)).to.throw('Users must be an array');
    });
  });

  describe('sortUsersByName', () => {
    it('Sorts users by name', () => {
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

    it('Throws an error if input is not an array', () => {
      expect(() => sortUsersByName('not array')).to.throw('Users must be an array');
    });
  });

  describe('findUserById', () => {
    it('Finds a user by ID', () => {
      const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Alice' },
      ];
      expect(findUserById(users, 2)).to.deep.equal({ id: 2, name: 'Alice' });
    });

    it('Throws an error if input is not an array', () => {
      expect(() => findUserById('not array', 1)).to.throw('Users must be an array');
    });
  });

  describe('isEmailTaken', () => {
    it('Checks if a given email is already used by any user', () => {
      const users = [
        { id: 1, email: 'john@example.com' },
        { id: 2, email: 'alice@example.com' },
      ];
      expect(isEmailTaken(users, 'john@example.com')).to.be.true;
    });

    it('Throws an error if input is not an array', () => {
      expect(() => isEmailTaken('not array', 'test@example.com')).to.throw('Users must be an array');
    });
  });
});
