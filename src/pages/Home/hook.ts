import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { schema, Task } from './types';
import { DESIRED_TIME } from './utils';

export function useHome() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Task>({
    resolver: zodResolver(schema),
    defaultValues: {
      desiredTime: 0,
      name: '',
    },
  });

  const taskNameRegister = register('name');
  const desiredTimeRegister = register('desiredTime', {
    min: DESIRED_TIME.min,
    max: DESIRED_TIME.max,
    required: true,
    valueAsNumber: true,
    onBlur: handleDesiredTimeOnBlur,
  });

  function handleDesiredTimeOnClick(add: boolean) {
    const valueDesiredTime = getValues('desiredTime');

    const chosenTime = add
      ? valueDesiredTime + DESIRED_TIME.step
      : valueDesiredTime - DESIRED_TIME.step;

    if (chosenTime < DESIRED_TIME.min) {
      setValue('desiredTime', DESIRED_TIME.min);

      return;
    }

    if (chosenTime > DESIRED_TIME.max) {
      setValue('desiredTime', DESIRED_TIME.max);

      return;
    }

    setValue('desiredTime', chosenTime);
  }

  function handleDesiredTimeOnBlur() {
    const valueDesiredTime = getValues('desiredTime');

    if (valueDesiredTime < DESIRED_TIME.min) {
      setValue('desiredTime', DESIRED_TIME.min);

      return;
    }

    if (valueDesiredTime > DESIRED_TIME.max) {
      setValue('desiredTime', DESIRED_TIME.max);

      return;
    }

    if (!Number.isInteger(valueDesiredTime)) {
      setValue('desiredTime', Math.floor(valueDesiredTime));
    }
  }

  function onSubmit() {
    console.log('>>>', { errors });
  }

  return {
    taskNameRegister,
    desiredTimeRegister,
    handleDesiredTimeOnClick,
    onSubmit,
    handleSubmit,
  };
}
