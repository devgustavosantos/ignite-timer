import { useState } from 'react';

import { TaskType } from '@/types/task';

import { TasksContext } from './';
import { TasksProviderProps } from './types';

export function TasksProvider({ children }: TasksProviderProps) {
  const [currentTask, setCurrentTask] = useState<TaskType | null>(null);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function interruptTask() {
    if (!currentTask) return;

    setTasks((prevState) => {
      return [
        ...prevState,
        {
          ...currentTask,
          interruptedAt: new Date(),
        },
      ];
    });

    setCurrentTask(null);
  }

  return (
    <TasksContext.Provider
      value={{ currentTask, setCurrentTask, interruptTask, tasks }}
    >
      {children}
    </TasksContext.Provider>
  );
}
