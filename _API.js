import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA';

export async function getData() {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return ({ users, questions });
}

export function saveQuestion(qn) {
  return _saveQuestion(qn);
}

export function saveQuestionAnswer(qn) {
  return _saveQuestionAnswer(qn);
}
