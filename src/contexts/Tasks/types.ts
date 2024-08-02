import { Dispatch, ReactNode, SetStateAction } from 'react';

import { TaskType } from '@/types/task';

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextType {
  task: TaskType | null;
  setTask: Dispatch<SetStateAction<TaskType | null>>;
}

export type { TasksProviderProps, TasksContextType };
