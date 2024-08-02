import { TasksContext } from './';
import { TasksProviderProps } from './types';

export function TasksProvider({ children }: TasksProviderProps) {
  const placeholder = 'test';

  return (
    <TasksContext.Provider value={{ placeholder }}>
      {children}
    </TasksContext.Provider>
  );
}
