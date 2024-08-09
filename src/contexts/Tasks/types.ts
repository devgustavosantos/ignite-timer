import { ReactNode } from 'react';

import { TaskType, CreateTaskType } from '@/types/task';

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextType {
  currentTask: TaskType | null;
  tasks: TaskType[];
  createTask: (data: CreateTaskType) => void;
  interruptTask: () => void;
  finishTask: () => void;
}

export type { TasksProviderProps, TasksContextType };
