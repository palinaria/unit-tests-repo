"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkStudentKnowledge = checkStudentKnowledge;
/**
 * The function takes an object with the student's answers and compares them with the correct answers.
 * @param {Object} studentAnswers - Student answers in the format { question1: answer1, question2: answer2, ... }.
 * @param {Object} correctAnswers - Correct answers in the same format.
 * @returns {boolean} Returns true if all answers are correct, and false if at least one answer is incorrect.
 */
function checkStudentKnowledge(studentAnswers, correctAnswers) {
  var studentKeys = Object.keys(studentAnswers);
  var correctKeys = Object.keys(correctAnswers);
  if (studentKeys.length !== correctKeys.length) {
    return false;
  }
  for (var i = 0; i < studentKeys.length; i++) {
    if (studentKeys[i] !== correctKeys[i]) {
      return false;
    }
  }
  for (var _i = 0, _studentKeys = studentKeys; _i < _studentKeys.length; _i++) {
    var key = _studentKeys[_i];
    if (studentAnswers[key] !== correctAnswers[key]) {
      return false;
    }
  }
  return true;
}