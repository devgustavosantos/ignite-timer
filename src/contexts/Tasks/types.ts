import { Dispatch, ReactNode } from 'react';

import { TasksState, TasksAction } from '@/types/task';

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextType {
  tasks: TasksState;
  dispatch: Dispatch<TasksAction>;
}

export type { TasksProviderProps, TasksContextType };
