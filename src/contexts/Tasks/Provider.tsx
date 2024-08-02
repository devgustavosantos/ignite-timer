import { useState } from 'react';

import { TaskType } from '@/types/task';

import { TasksContext } from './';
import { TasksProviderProps } from './types';

export function TasksProvider({ children }: TasksProviderProps) {
  const [currentTask, setCurrentTask] = useState<TaskType | null>(null);

  return (
    <TasksContext.Provider value={{ currentTask, setCurrentTask }}>
      {children}
    </TasksContext.Provider>
  );
}
