import { produce } from 'immer';
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
      return [taskToBeCreated, ...prevState];
    });
  }

  function interruptTask() {
    if (!currentTask) return;

    const nextTasks = produce(tasks, (draftState) => {
      const currentTaskIndex = draftState.findIndex(
        (task) => task.createdAt === currentTask.createdAt,
      );

      draftState[currentTaskIndex].interruptedAt = new Date();
    });

    setCurrentTask(null);
    setTasks(nextTasks);
  }

  function finishTask() {
    if (!currentTask) return;

    const nextTasks = produce(tasks, (draftState) => {
      const currentTaskIndex = draftState.findIndex(
        (task) => task.createdAt === currentTask.createdAt,
      );

      draftState[currentTaskIndex].finishedAt = new Date();
    });

    setCurrentTask(null);
    setTasks(nextTasks);
  }

  return (
    <TasksContext.Provider
      value={{ currentTask, tasks, createTask, interruptTask, finishTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}
