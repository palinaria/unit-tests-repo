"use strict";

var add = function add(a, b) {
  return a + b;
};
var subtract = function subtract(a, b) {
  return a - b;
};
var multiply = function multiply(a, b) {
  return a * b;
};
var divide = function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};