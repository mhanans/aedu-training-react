import { createStore } from 'redux';

interface State {
  count: number;
}

const reducer = (state: State = { count: 0 }, action: { type: string }) => {
  if (action.type === 'INCREMENT') return { count: state.count + 1 };
  return state;
};

export const store = createStore(reducer);