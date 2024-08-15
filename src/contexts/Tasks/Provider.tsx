import { useEffect, useReducer } from 'react';
import superjson from 'superjson';

import { TasksReducer } from '@/reducers/Tasks';
import { LOCAL_STORAGE_KEY } from '@/utils/localStorageKey';

import { TasksContext } from './';
import { TasksProviderProps } from './types';

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, dispatch] = useReducer(
    TasksReducer.reducer,
    TasksReducer.initialArg,
    TasksReducer.init,
  );

  useEffect(() => {
    if (!tasks.created.length) return;

    localStorage.setItem(LOCAL_STORAGE_KEY, superjson.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}
