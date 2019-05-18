import { Word } from '../entities/Word';
import { deleteWordGateway } from '../gateways/WordGateway';
import { wordActions } from '../WordActions';
import { WordThunk } from '../WordThunkType';

export const removeThunk: WordThunk<{ userId: string; word: Word }> = input => async (
  dispatch,
  _getState,
  injections,
) => {
  dispatch(wordActions.remove(input));

  await deleteWordGateway(input, injections);

  dispatch(
    wordActions.removeSuccess({
      removedWordId: input.word.id,
      userId: input.userId,
    }),
  );
};