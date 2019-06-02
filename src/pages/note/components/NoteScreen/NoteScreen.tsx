import { Body, Container, Icon, ListItem, Right, Text } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { defaultTheme } from '../../../../application/theme/DefaultTheme';
import { FontSize } from '../../../../application/theme/Theme';
import { LoadingPage } from '../../../../components/LoadingPage';
import { Note, useNoteScreen } from './NoteScreenHook';

const PADDING_BOTTOM = 200;

export const LargeIcon: React.FunctionComponent<{ name: string }> = ({ name }) => (
  <Icon fontSize={defaultTheme.fontSize[FontSize.LARGE]} name={name} />
);

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export const NoteScreen: React.FunctionComponent<Props> = ({ navigation }) => {
  const { loading, notes, onEdit } = useNoteScreen(navigation);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Container>
      <FlatList<Note>
        contentContainerStyle={styles.container}
        data={notes}
        keyExtractor={note => String(note.id)}
        renderItem={({ item: note }) => {
          return (
            <ListItem onPress={() => onEdit(note.id)}>
              <Body>
                <Text>{note.text}</Text>
              </Body>
              <Right>
                <Text note>{note.createdAt}</Text>
              </Right>
            </ListItem>
          );
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: PADDING_BOTTOM,
  },
});
