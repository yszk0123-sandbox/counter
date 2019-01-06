import { CounterAction, CounterState } from '../pages/counter/counter-type';
import { NoteAction, NoteState } from '../pages/note/note-type';
import { WordAction, WordState } from '../pages/word/word-type';
import { Dispatch } from '../redux';
import { RoutingAction, RoutingState } from '../routing/routing-type';

export type AppAction = CounterAction | RoutingAction | NoteAction | WordAction;

export type AppDispatch = Dispatch<AppAction>;

export interface AppState {
  counter: CounterState;
  routing: RoutingState;
  note: NoteState;
  word: WordState;
}

export interface AppRoutingContext {
  app: firebase.app.App;
  firestore: firebase.firestore.Firestore;
  pathname: string;
  dispatch: AppDispatch;
}
