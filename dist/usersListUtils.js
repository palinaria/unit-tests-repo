"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterUsersByAge = filterUsersByAge;
exports.findUserById = findUserById;
exports.isEmailTaken = isEmailTaken;
exports.sortUsersByName = sortUsersByName;
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Filters users by age.
 * @param {Array} users - List of users.
 * @param {number} minAge - Minimum age.
 * @param {number} maxAge - Maximum age.
 * @returns {Array} - Filtered list of users.
 */
function filterUsersByAge(users, minAge, maxAge) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return users.filter(function (user) {
    return user.age >= minAge && user.age <= maxAge;
  });
}

/**
   * Sorts the list of users by name (alphabetically).
   * @param {Array} users - List of users.
   * @returns {Array} - Sorted list of users.
   */
function sortUsersByName(users) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return _toConsumableArray(users).sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

/**
   * Finds a user by ID.
   * @param {Array} users - List of users.
   * @param {number} id - User ID.
   * @returns {Object|null} - Found user, or null if user not found.
   */
function findUserById(users, id) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return users.find(function (user) {
    return user.id === id;
  }) || null;
}

/**
   * Checks if there is a user with the specified email in the list.
   * @param {Array} users - List of users.
   * @param {string} email - Email to check.
   * @returns {boolean} - True if a user with this email exists, otherwise false.
   */
function isEmailTaken(users, email) {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }
  return users.some(function (user) {
    return user.email === email;
  });
}