import { useCallback } from 'react';
import {
  HomeScreenQuery,
  useHomeScreenQuery,
  useUpdateCounterMutation,
} from '../../../GraphQLType';

interface Props {
  count: number;
  loading: boolean;
  notes: Notes;
  onIncrement: () => void;
  onDecrement: () => void;
}

// FIXME: Remove (#54)
type Counter = NonNullable<HomeScreenQuery['counter']>;
type Notes = NonNullable<HomeScreenQuery['notes']>;
const loadingCounter: Counter = [];
const loadingNotes: Notes = [];

export function useHomeScreen(): Props {
  const { data, loading } = useHomeScreenQuery();
  const counter = (data && data.counter) || loadingCounter;
  const notes = (data && data.notes) || loadingNotes;
  const count = counter.length ? counter[0].count : -1;

  const update = useUpdateCounterMutation();

  const onIncrement = useCallback(() => {
    update({ variables: { input: { count: count + 1 } } });
  }, [update, count]);

  const onDecrement = useCallback(() => {
    update({ variables: { input: { count: Math.max(count - 1, 0) } } });
  }, [update, count]);

  return {
    count,
    loading,
    notes,
    onDecrement,
    onIncrement,
  };
}