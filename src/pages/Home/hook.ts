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
    watch,
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

  const taskNameWatch = watch('name');
  const desiredTimeWatch = watch('desiredTime');

  const isAvailableStartCountdown = schema.safeParse({
    name: taskNameWatch,
    desiredTime: desiredTimeWatch,
  }).success;

  function handleDesiredTimeOnClick(add: boolean) {
    const chosenTime = add
      ? desiredTimeWatch + DESIRED_TIME.step
      : desiredTimeWatch - DESIRED_TIME.step;

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
    if (desiredTimeWatch < DESIRED_TIME.min) {
      setValue('desiredTime', DESIRED_TIME.min);

      return;
    }

    if (desiredTimeWatch > DESIRED_TIME.max) {
      setValue('desiredTime', DESIRED_TIME.max);

      return;
    }

    if (isNaN(desiredTimeWatch)) {
      setValue('desiredTime', DESIRED_TIME.min);

      return;
    }

    if (!Number.isInteger(desiredTimeWatch)) {
      setValue('desiredTime', Math.floor(desiredTimeWatch));
    }
  }

  function onSubmit() {
    console.log('>>>', { errors });
  }

  return {
    taskNameRegister,
    desiredTimeRegister,
    isAvailableStartCountdown,
    handleDesiredTimeOnClick,
    onSubmit,
    handleSubmit,
  };
}
