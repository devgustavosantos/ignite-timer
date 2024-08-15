import SuperJSON from 'superjson';

import { TaskSchema, TasksState } from '@/types/task';
import { LOCAL_STORAGE_KEY } from '@/utils/localStorageKey';

export function init(initialState: TasksState): TasksState {
  const tasksInMemory = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!tasksInMemory) return initialState;

  try {
    const tasksParsed = SuperJSON.parse<TasksState>(tasksInMemory);

    const areTasksValid = tasksParsed.created.every(
      ({ name, desiredTime, createdAt, interruptedAt, finishedAt }) =>
        TaskSchema.safeParse({
          name: name,
          desiredTime,
          createdAt,
          interruptedAt,
          finishedAt,
        }).success,
    );

    return areTasksValid ? tasksParsed : initialState;
  } catch (error) {
    console.error('>>> Error converting saved tasks!', error);

    return initialState;
  }
}
