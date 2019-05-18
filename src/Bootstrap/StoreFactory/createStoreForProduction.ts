import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { AppInjections } from '../../application/ApplicationType';
import { rootReducer } from '../RootReducer';

export const createStoreForProduction = (injections: AppInjections) => {
  return createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(injections)));
};