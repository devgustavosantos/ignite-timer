import { ReactNode } from 'react';
import { UseFormHandleSubmit, UseFormRegisterReturn } from 'react-hook-form';

import { CreateTaskType } from '@/types/task';

interface FormProviderProps {
  children: ReactNode;
}

interface FormContextType {
  taskNameRegister: UseFormRegisterReturn<'name'>;
  desiredTimeRegister: UseFormRegisterReturn<'desiredTime'>;
  isAvailableStartCountdown: boolean;
  handleDesiredTimeOnClick: (add: boolean) => void;
  onSubmit: (data: CreateTaskType) => void;
  handleSubmit: UseFormHandleSubmit<CreateTaskType, undefined>;
}

type FormRegister = keyof CreateTaskType;

export type { FormProviderProps, FormContextType, FormRegister };
