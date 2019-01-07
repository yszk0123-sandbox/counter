import { Effect } from '../../../app/redux';
import { copyToClipboard } from '../../../utils/copyToClipboard';
import { NoteAction, noteActions } from '../NoteActions';
import { NoteGlobalState } from '../NoteState';

interface CopyTextInput {
  text: string;
}

export interface CopyTextEffect
  extends Effect<NoteGlobalState, NoteAction, CopyTextInput> {}

export function createCopyTextEffect(): CopyTextEffect {
  return input => async dispatch => {
    dispatch(noteActions.copyText(input));

    copyToClipboard(input.text);

    dispatch(noteActions.copyTextSuccess());
  };
}
