import { REQUEST_SENT, RESPONSE_RECEIVED } from '../actions/types';

export default function (state = {}, action) {
  let loading = 0;
  switch (action.type) {
  case REQUEST_SENT:
    loading = state.requestProcessing || 0;
    loading += 1;
    return { ...state, requestProcessing: loading };
  case RESPONSE_RECEIVED:
    loading = state.requestProcessing || 0;
    if (loading > 0) {
      loading -= 1;
    }
    return { ...state, requestProcessing: loading };
  default:
    return state;
  }
}
