import { useState } from 'react';

import { CreateTaskType, TaskType } from '@/types/task';

import { TasksContext } from './';
import { TasksProviderProps } from './types';

export function TasksProvider({ children }: TasksProviderProps) {
  const [currentTask, setCurrentTask] = useState<TaskType | null>(null);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function createTask({ name, desiredTime }: CreateTaskType) {
    if (currentTask) return;

    const taskToBeCreated = {
      name,
      desiredTime,
      createdAt: new Date(),
    };

    setCurrentTask(taskToBeCreated);

    setTasks((prevState) => {
      return [...prevState, taskToBeCreated];
    });
  }

  function interruptTask() {
    if (!currentTask) return;

    setCurrentTask(null);

    setTasks((prevState) => {
      return [
        ...prevState,
        {
          ...currentTask,
          interruptedAt: new Date(),
        },
      ];
    });
  }

  function finishTask() {
    if (!currentTask) return;

    setCurrentTask(null);

    setTasks((prevState) => {
      return [
        ...prevState,
        {
          ...currentTask,
          finishedAt: new Date(),
        },
      ];
    });
  }

  return (
    <TasksContext.Provider
      value={{ currentTask, tasks, createTask, interruptTask, finishTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}
