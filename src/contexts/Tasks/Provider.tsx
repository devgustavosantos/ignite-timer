import { produce } from 'immer';
import { useEffect, useState } from 'react';
import superjson from 'superjson';

import { CreateTaskType, TaskType } from '@/types/task';

import { TasksContext } from './';
import { TasksProviderProps } from './types';
import { LOCAL_STORAGE_KEY } from './utils';

export function TasksProvider({ children }: TasksProviderProps) {
  const [currentTask, setCurrentTask] = useState<TaskType | null>(null);
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!savedTasks) return [];

    const savedTasksParsed = superjson.parse<TaskType[]>(savedTasks);
    return savedTasksParsed;
  });

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

  useEffect(() => {
    if (!tasks.length) return;

    localStorage.setItem(LOCAL_STORAGE_KEY, superjson.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{ currentTask, tasks, createTask, interruptTask, finishTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}
