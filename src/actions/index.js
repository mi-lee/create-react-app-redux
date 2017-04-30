import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/';

export function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
  };
}

export function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, Math.random() * 1000);
  };
}

export function decrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(decrement());
    }, Math.random() * 1000);
  };
}
