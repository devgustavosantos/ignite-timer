import { ChangeEvent, useState } from 'react';

import { DESIRED_TIME } from './utils';

export function useHome() {
  const [taskName, setTaskName] = useState('');
  const [desiredTime, setDesiredTime] = useState<number | undefined>(undefined);

  function handleDesiredTime(add: boolean) {
    const currentValue = desiredTime ?? 0;

    const chosenTime = add
      ? currentValue + DESIRED_TIME.step
      : currentValue - DESIRED_TIME.step;

    if (chosenTime <= DESIRED_TIME.min) {
      setDesiredTime(DESIRED_TIME.min);

      return;
    }

    if (chosenTime >= DESIRED_TIME.max) {
      setDesiredTime(DESIRED_TIME.max);

      return;
    }

    setDesiredTime(chosenTime);
  }

  function modifiesDesiredTime(e: ChangeEvent<HTMLInputElement>) {
    const currentValue = Number(e.target.value);

    if (isNaN(currentValue)) return;

    if (currentValue >= DESIRED_TIME.max) {
      setDesiredTime(DESIRED_TIME.max);

      return;
    }

    setDesiredTime(currentValue);
  }

  return {
    taskName,
    setTaskName,
    desiredTime,
    handleDesiredTime,
    modifiesDesiredTime,
  };
}
