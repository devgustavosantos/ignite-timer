import { useEffect, useState } from 'react';

import { useTasksContext } from '@/contexts/Tasks';

export function useCountdown() {
  const { currentTask } = useTasksContext();

  const [remainingTime, setRemainingTime] = useState(() => {
    return currentTask ? currentTask?.desiredTime * 60 : 0;
  });

  const minutesRemaining = Math.floor(remainingTime / 60);
  const secondsRemaining = remainingTime - minutesRemaining * 60;

  const minutesToDisplayed = String(minutesRemaining).padStart(2, '0');
  const secondesToDisplayed = String(secondsRemaining).padStart(2, '0');

  useEffect(() => {
    const shouldRemainingTimeBeReset = !currentTask && remainingTime;
    if (shouldRemainingTimeBeReset) {
      setRemainingTime(0);

      return;
    }

    if (!currentTask) return;

    const timeout = setTimeout(() => {
      const currentDate = new Date();
      const distanceBetweenDates =
        currentDate.getTime() - currentTask?.createdAt.getTime();

      const distanceConvertedToSeconds = Math.floor(
        distanceBetweenDates / 1000,
      );

      const desiredTimeConvertedToSeconds = currentTask.desiredTime * 60;

      const secondsRemaining =
        desiredTimeConvertedToSeconds - distanceConvertedToSeconds;

      if (secondsRemaining <= 0) return;

      setRemainingTime(secondsRemaining);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentTask, remainingTime, setRemainingTime]);

  return { minutesToDisplayed, secondesToDisplayed };
}
