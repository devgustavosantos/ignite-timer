import { Dispatch, ReactNode, SetStateAction } from 'react';

import { TaskType } from '@/types/task';

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextType {
  currentTask: TaskType | null;
  setCurrentTask: Dispatch<SetStateAction<TaskType | null>>;
}

export type { TasksProviderProps, TasksContextType };
