import { Word, WordId } from '../../models/Word';
import { createAction, GetAction } from '../../redux';

export const enum WordActionType {
  ADD = 'word/ADD',
  ADD_SUCCESS = 'word/ADD_SUCCESS',
  UPDATE_CONTENT = 'word/UPDATE_CONTENT',
  LOAD = 'word/LOAD',
  LOAD_SUCCESS = 'word/LOAD_SUCCESS',
  SAVE = 'word/SAVE',
  SAVE_SUCCESS = 'word/SAVE_SUCCESS',
}

export const wordActions = {
  add: createAction(
    WordActionType.ADD,
    (payload: { userId: string; content: string }) => ({ payload }),
  ),
  addSuccess: createAction(
    WordActionType.ADD_SUCCESS,
    (payload: { userId: string; word: Word }) => ({ payload }),
  ),
  load: createAction(WordActionType.LOAD),
  loadSuccess: createAction(
    WordActionType.LOAD_SUCCESS,
    (payload: { words: Word[] }) => ({ payload }),
  ),
  save: createAction(
    WordActionType.SAVE,
    (payload: { userId: string; word: Word }) => ({ payload }),
  ),
  saveSuccess: createAction(WordActionType.SAVE_SUCCESS),
  updateContent: createAction(
    WordActionType.UPDATE_CONTENT,
    (payload: { userId: string; word: Word; content: string }) => ({ payload }),
  ),
};

export type WordAction = GetAction<typeof wordActions>;

export interface WordState {
  loading: boolean;
  saving: boolean;
  wordIds: WordId[];
  wordsById: Record<WordId, Word>;
}
