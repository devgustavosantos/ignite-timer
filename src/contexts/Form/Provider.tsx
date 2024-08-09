// eslint-disable-next-line import-helpers/order-imports
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useTasksContext } from '@/contexts/Tasks';
import { CreateTaskSchema, CreateTaskType } from '@/types/task';
import { TASK } from '@/utils/task';

import { FormContext } from './';
import { FormProviderProps } from './types';

export function FormProvider({ children }: FormProviderProps) {
  const { register, handleSubmit, setValue, watch, reset } =
    useForm<CreateTaskType>({
      resolver: zodResolver(CreateTaskSchema),
      defaultValues: {
        desiredTime: 0,
        name: '',
      },
    });

  const { createTask } = useTasksContext();

  const taskNameRegister = register('name');
  const desiredTimeRegister = register('desiredTime', {
    min: TASK.desiredTime.min,
    max: TASK.desiredTime.max,
    required: true,
    valueAsNumber: true,
    onBlur: handleDesiredTimeOnBlur,
  });

  const taskNameWatch = watch('name');
  const desiredTimeWatch = watch('desiredTime');

  const schemaValidation = CreateTaskSchema.safeParse({
    name: taskNameWatch,
    desiredTime: desiredTimeWatch,
  });
  const isAvailableStartCountdown = schemaValidation.success;

  function handleDesiredTimeOnClick(add: boolean) {
    const chosenTime = add
      ? desiredTimeWatch + TASK.desiredTime.multiple
      : desiredTimeWatch - TASK.desiredTime.multiple;

    if (chosenTime < TASK.desiredTime.min) {
      setValue('desiredTime', TASK.desiredTime.min);

      return;
    }

    if (chosenTime > TASK.desiredTime.max) {
      setValue('desiredTime', TASK.desiredTime.max);

      return;
    }

    setValue('desiredTime', chosenTime);
  }

  function handleDesiredTimeOnBlur() {
    if (desiredTimeWatch < TASK.desiredTime.min) {
      setValue('desiredTime', TASK.desiredTime.min);

      return;
    }

    if (desiredTimeWatch > TASK.desiredTime.max) {
      setValue('desiredTime', TASK.desiredTime.max);

      return;
    }

    if (isNaN(desiredTimeWatch)) {
      setValue('desiredTime', TASK.desiredTime.min);

      return;
    }

    if (!Number.isInteger(desiredTimeWatch)) {
      setValue('desiredTime', Math.floor(desiredTimeWatch));
    }
  }

  function onSubmit(data: CreateTaskType) {
    if (schemaValidation.error) return;

    createTask(data);

    reset();
  }

  return (
    <FormContext.Provider
      value={{
        taskNameRegister,
        desiredTimeRegister,
        isAvailableStartCountdown,
        handleDesiredTimeOnClick,
        onSubmit,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
