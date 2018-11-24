import { isNull, Nullable } from 'option-t/lib/Nullable';
import { mapForNullable } from 'option-t/lib/Nullable/map';
import React, { useCallback, useEffect, useRef } from 'react';
import { AppState } from '../../../app/app-type';
import useRedux from '../../../app/useRedux';
import { Button } from '../../../components/Button';
import { Text } from '../../../components/Text';
import { Editor } from '../../../modules/editor';
import { EditorMethods } from '../../../modules/editor/components/Editor';
import { styled } from '../../../styled-components';
import { FontSize } from '../../../theme/theme-type';
import { useDebouncedCallback } from '../../../utils/useDebouncedCallback';
import { noteEffects } from '../NoteEffect';

const CHANGE_DELAY = 5000;
const EDITOR_MIN_HEIGHT = '6rem';

const StyledNote = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .ProseMirror {
    min-height: ${EDITOR_MIN_HEIGHT};
    font-size: ${({ theme }) => theme.fontSize.default};
  }
`;

const StyledEditor = styled(Editor)<{ readonly: boolean }>`
  opacity: ${({ readonly }) => (readonly ? 0.5 : 1)};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.space}px;
`;

const StyledText = styled(Text)`
  margin-left: ${({ theme }) => theme.space}px;
`;

interface Props {}

export const Note: React.FunctionComponent<Props> = () => {
  const [{ userId, saving, loading, note }, dispatch] = useRedux(mapState);
  const editorRef = useRef<Nullable<EditorMethods>>(null);
  const noteId = '1';

  const onSave = useCallback(
    () => {
      if (isNull(userId) || isNull(editorRef.current)) {
        return;
      }

      const contentToBeSaved = editorRef.current.getData();
      if (isNull(contentToBeSaved)) {
        return;
      }

      const noteToSave = {
        id: noteId,
        content: contentToBeSaved,
      };

      dispatch(
        noteEffects.save({
          userId,
          note: noteToSave,
        }),
      );
    },
    [dispatch, userId, noteId],
  );

  const onChange = useDebouncedCallback(onSave, CHANGE_DELAY, [
    dispatch,
    userId,
    noteId,
  ]);

  useEffect(
    () => {
      if (isNull(userId)) {
        return;
      }

      dispatch(noteEffects.load({ userId, noteId }));
    },
    [userId],
  );

  const content = mapForNullable(note, _ => _.content);

  return (
    <StyledNote>
      <StyledEditor
        ref={editorRef}
        content={content}
        readonly={loading}
        onChange={onChange}
      />
      <Footer>
        <Button onClick={onSave}>Save</Button>
        <StyledText size={FontSize.SMALL}>
          {saving ? 'saving...' : 'saved'}
        </StyledText>
      </Footer>
    </StyledNote>
  );
};

function mapState(state: AppState) {
  const { saving, note } = state.note;
  const { loading, user } = state.routing;

  return {
    saving,
    loading,
    note,
    userId: user ? user.uid : null,
  };
}