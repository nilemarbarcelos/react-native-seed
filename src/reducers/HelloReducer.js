import { HELLO_WORLD } from '../actions/types';

const INITIAL_STATE = { hello: 'Hello World!' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      return action.payload;
    default:
      return state;
  }
};
