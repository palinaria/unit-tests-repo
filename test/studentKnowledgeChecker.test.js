import { expect } from 'chai';
import { checkStudentKnowledge } from '../src/studentKnowledgeCheckerUtil.js';

describe('Student Knowledge Checker', () => {
  it('Returns true for correct answers', () => {
    const studentAnswers = { q1: 'a1', q2: 'a2' };
    const correctAnswers = { q1: 'a1', q2: 'a2' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
  });

  it('Returns false for incorrect answers', () => {
    const studentAnswers = { q1: 'a1', q2: 'wrong' };
    const correctAnswers = { q1: 'a1', q2: 'a2' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('Returns false if the number of keys is different', () => {
    const studentAnswers = { q1: 'a1', q2: 'a2', q3: 'a3' };
    const correctAnswers = { q1: 'a1', q2: 'a2' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it('Returns false if the keys do not match', () => {
    const studentAnswers = { q1: 'a1', q3: 'a3' };
    const correctAnswers = { q1: 'a1', q2: 'a2' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });
});
