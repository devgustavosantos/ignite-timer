import { Dispatch, ReactNode, SetStateAction } from 'react';

import { TaskType } from '@/types/task';

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextType {
  currentTask: TaskType | null;
  setCurrentTask: Dispatch<SetStateAction<TaskType | null>>;
  interruptTask: () => void;
  tasks: TaskType[];
}

export type { TasksProviderProps, TasksContextType };
