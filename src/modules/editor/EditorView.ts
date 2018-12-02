import { Nullable } from 'option-t/lib/Nullable';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { noop } from '../../utils/noop';
import { EditorContent } from './editor-type';

export type OnChange = (getContent: () => Nullable<EditorContent>) => void;

interface EditorViewParam {
  state: EditorState;
  onChange: (
    nextState: EditorState,
    prevState: EditorState,
    docChanged: boolean,
  ) => void;
}

export function createEditorView({ state, onChange = noop }: EditorViewParam) {
  const editorView = new EditorView(undefined, {
    dispatchTransaction(tr) {
      const prevState = editorView.state;
      const nextState = prevState.apply(tr);
      onChange(nextState, prevState, tr.docChanged);
    },
    state,
  });

  return editorView;
}