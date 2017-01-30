import { HELLO_WORLD }
from './types';

export const helloWorld = () => {
  return {
    type: HELLO_WORLD,
    payload: { hello: 'Hello World!' }
  };
};
