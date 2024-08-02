import { useState } from 'react';

import { TaskType } from '@/types/task';

import { TasksContext } from './';
import { TasksProviderProps } from './types';

export function TasksProvider({ children }: TasksProviderProps) {
  const [task, setTask] = useState<TaskType | null>(null);

  return (
    <TasksContext.Provider value={{ task, setTask }}>
      {children}
    </TasksContext.Provider>
  );
}
