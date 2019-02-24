
import { SUCCESS_MESSAGE } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
  case SUCCESS_MESSAGE:
    return { ...state, successMessage: action.payload };
  default:
    return state;
  }
}
