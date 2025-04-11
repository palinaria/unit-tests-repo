import { expect } from "chai";
import { checkStudentKnowledge } from '../src/studentKnowledgeCheckerUtil.js';


describe('Student Knowledge Checker', () => {
  it("Возвращает true для правильных ответов", () => {
    const studentAnswers = { q1: 'a1', q2: 'a2' };
    const correctAnswers = { q1: 'a1', q2: 'a2' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
  });

  it("Возвращает false для неправильных ответов", () => {
    const studentAnswers = { q1: 'a1', q2: 'wrong' };
    const correctAnswers = { q1: 'a1', q2: 'a2' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it("Возвращает false, если количество ключей разное", () => {
    const studentAnswers = { q1: 'a1', q2: 'a2', q3: 'a3' };
    const correctAnswers = { q1: 'a1', q2: 'a2' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

  it("Возвращает false, если ключи не совпадают", () => {
    const studentAnswers = { q1: 'a1', q3: 'a3' };
    const correctAnswers = { q1: 'a1', q2: 'a2' };
    expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
  });

});
