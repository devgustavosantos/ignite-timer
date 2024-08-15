import { produce } from 'immer';

import { TasksAction, TasksState } from '@/types/task';

/* eslint-disable indent*/
export function reducer(state: TasksState, action: TasksAction): TasksState {
  switch (action.type) {
    case 'create': {
      if (state.current || !action.payload) return state;

      const taskToBeCreated = {
        name: action.payload.name,
        desiredTime: action.payload.desiredTime,
        createdAt: new Date(),
      };

      return {
        current: taskToBeCreated,
        created: [taskToBeCreated, ...state.created],
      };
    }

    case 'interrupt': {
      if (!state.current) return state;

      const nextTasks = produce(state.created, (draftState) => {
        const currentTaskIndex = draftState.findIndex(
          (task) => task.createdAt === state.current?.createdAt,
        );

        draftState[currentTaskIndex].interruptedAt = new Date();
      });

      return {
        current: null,
        created: nextTasks,
      };
    }

    case 'finished': {
      if (!state.current) return state;

      const nextTasks = produce(state.created, (draftState) => {
        const currentTaskIndex = draftState.findIndex(
          (task) => task.createdAt === state.current?.createdAt,
        );

        draftState[currentTaskIndex].finishedAt = new Date();
      });

      return {
        current: null,
        created: nextTasks,
      };
    }

    default: {
      console.error('>>> Unknown action:', action.type);

      return state;
    }
  }
}
/* eslint-enable indent */
