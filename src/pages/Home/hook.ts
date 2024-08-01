import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { FormSchema, FormType, TaskType } from './types';
import { DESIRED_TIME } from './utils';

export function useHome() {
  const [task, setTask] = useState<TaskType | null>(null);

  const { register, handleSubmit, setValue, watch } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
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

  const schemaValidation = FormSchema.safeParse({
    name: taskNameWatch,
    desiredTime: desiredTimeWatch,
  });
  const isAvailableStartCountdown = schemaValidation.success;

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

  function onSubmit(data: FormType) {
    if (schemaValidation.error) return;

    setTask({
      name: data.name,
      desiredTime: data.desiredTime,
      createdAt: new Date(),
    });
  }

  console.log('>>> task', task);

  return {
    taskNameRegister,
    desiredTimeRegister,
    isAvailableStartCountdown,
    handleDesiredTimeOnClick,
    onSubmit,
    handleSubmit,
  };
}
