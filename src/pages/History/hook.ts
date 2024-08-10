import { TaskType } from '@/types/task';

import { status } from './types';

export function useHistory() {
  function getTaskStatus(task: TaskType) {
    if (task.interruptedAt) return status.enum.interrupted;

    if (task.finishedAt) return status.enum.concluded;

    return status.enum.ongoing;
  }

  return { getTaskStatus };
}
