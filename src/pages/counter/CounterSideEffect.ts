import { SideEffect } from '../../app/DucksType';
import { CounterAction, counterActions } from './CounterActions';
import { CounterGlobalState } from './CounterState';

interface CounterSideEffect extends SideEffect<CounterGlobalState, CounterAction> {}

const incrementByTen: CounterSideEffect = () => async dispatch => {
  dispatch(counterActions.incrementBy({ n: 9 }));
  dispatch(counterActions.increment());
};

export const counterSideEffects = { incrementByTen };
