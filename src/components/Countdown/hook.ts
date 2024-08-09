import { useEffect, useState } from 'react';

import { useTasksContext } from '@/contexts/Tasks';

import { SegmentsTime } from './types';

export function useCountdown() {
  const [remainingTime, setRemainingTime] = useState(0);

  const { currentTask, finishTask } = useTasksContext();

  const desiredTimeConvertedToSeconds = currentTask
    ? currentTask.desiredTime * 60
    : 0;

  const segmentedTime = (() => {
    function segmentsTime({
      timeToBeSegmented,
      minutesRemaining,
    }: SegmentsTime) {
      const minutes = Math.floor(timeToBeSegmented / 60);
      if (minutes) {
        const minutesConverted = minutes * 60;

        return segmentsTime({
          timeToBeSegmented: timeToBeSegmented - minutesConverted,
          minutesRemaining: minutes,
        });
      }

      return {
        minutesRemaining: minutesRemaining ?? 0,
        secondsRemaining: timeToBeSegmented,
      };
    }

    return segmentsTime({
      timeToBeSegmented: remainingTime,
    });
  })();

  const minutesToDisplayed = String(segmentedTime.minutesRemaining).padStart(
    2,
    '0',
  );
  const secondesToDisplayed = String(segmentedTime.secondsRemaining).padStart(
    2,
    '0',
  );

  useEffect(() => {
    if (!currentTask) {
      setRemainingTime(0);

      return;
    }

    setRemainingTime(desiredTimeConvertedToSeconds);
  }, [currentTask, desiredTimeConvertedToSeconds]);

  useEffect(() => {
    if (!currentTask) return;

    const timeout = setTimeout(() => {
      const currentDate = new Date();
      const distanceBetweenDates =
        currentDate.getTime() - currentTask.createdAt.getTime();

      const distanceConvertedToSeconds = Math.floor(
        distanceBetweenDates / 1000,
      );

      const secondsRemaining =
        desiredTimeConvertedToSeconds - distanceConvertedToSeconds;

      setRemainingTime(secondsRemaining);

      if (secondsRemaining > 0) return;

      finishTask();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [remainingTime, currentTask, desiredTimeConvertedToSeconds, finishTask]);

  return { minutesToDisplayed, secondesToDisplayed };
}
