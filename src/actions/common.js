import { getData } from '../_API';
import { receiveQuestions } from './questions';
import { receiveUsers } from './user/users';

export function handleData() {
  return async dispatch => {
    const { users, questions } = await getData();
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
  };
}
