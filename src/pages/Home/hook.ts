import { useState } from 'react';

import { DESIRED_TIME } from './utils';

export function useHome() {
  const [taskName, setTaskName] = useState('');
  const [desiredTime, setDesiredTime] = useState(0);

  function handleDesiredTime(add: boolean) {
    const chosenTime = add
      ? desiredTime + DESIRED_TIME.step
      : desiredTime - DESIRED_TIME.step;

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

  return {
    taskName,
    setTaskName,
    desiredTime,
    setDesiredTime,
    handleDesiredTime,
  };
}
