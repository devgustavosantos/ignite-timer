import { ReactNode } from 'react';

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextType {
  placeholder: string;
}

export type { TasksProviderProps, TasksContextType };
