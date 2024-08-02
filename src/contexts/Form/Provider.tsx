// eslint-disable-next-line import-helpers/order-imports
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useTasksContext } from '@/contexts/Tasks';
import { TASK } from '@/utils/task';

import { FormContext } from './';
import { FormSchema, FormType, FormProviderProps } from './types';

export function FormProvider({ children }: FormProviderProps) {
  const { register, handleSubmit, setValue, watch } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      desiredTime: 0,
      name: '',
    },
  });

  const { setCurrentTask } = useTasksContext();

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

  const schemaValidation = FormSchema.safeParse({
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

  function onSubmit(data: FormType) {
    if (schemaValidation.error) return;

    setCurrentTask({
      name: data.name,
      desiredTime: data.desiredTime,
      createdAt: new Date(),
    });
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
