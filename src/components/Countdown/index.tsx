import { memo, useEffect, useState } from 'react';

import { useTasksContext } from '@/contexts/Tasks';

import * as S from './styles';

function CountdownComponent() {
  const { currentTask } = useTasksContext();

  const [remainingTime, setRemainingTime] = useState(() => {
    return currentTask ? currentTask?.desiredTime * 60 : 0;
  });

  const minutesRemaining = Math.floor(remainingTime / 60);
  const secondsRemaining = remainingTime - minutesRemaining * 60;

  const minutesToDisplayed = String(minutesRemaining).padStart(2, '0');
  const secondesToDisplayed = String(secondsRemaining).padStart(2, '0');

  useEffect(() => {
    setTimeout(() => {
      if (!currentTask) return;

      const currentDate = new Date();
      const distanceBetweenDates =
        currentDate.getTime() - currentTask?.createdAt.getTime();

      const distanceConvertedToSeconds = Math.floor(
        distanceBetweenDates / 1000,
      );

      const desiredTimeConvertedToSeconds = currentTask.desiredTime * 60;

      const secondsRemaining =
        desiredTimeConvertedToSeconds - distanceConvertedToSeconds;

      setRemainingTime(secondsRemaining <= 0 ? 0 : secondsRemaining);
    }, 1000);
  }, [currentTask, remainingTime]);

  return (
    <S.Container>
      <S.Number>{minutesToDisplayed[0]}</S.Number>
      <S.Number>{minutesToDisplayed[1]}</S.Number>
      <S.NumberSeparator>:</S.NumberSeparator>
      <S.Number>{secondesToDisplayed[0]}</S.Number>
      <S.Number>{secondesToDisplayed[1]}</S.Number>
    </S.Container>
  );
}

export const Countdown = memo(CountdownComponent);
