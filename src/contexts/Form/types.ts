import { ReactNode } from 'react';
import { UseFormHandleSubmit, UseFormRegisterReturn } from 'react-hook-form';
import * as z from 'zod';

import { TaskSchema } from '@/types/task';

interface FormProviderProps {
  children: ReactNode;
}

export const FormSchema = TaskSchema.pick({ name: true, desiredTime: true });

type FormType = z.infer<typeof FormSchema>;

interface FormContextType {
  taskNameRegister: UseFormRegisterReturn<'name'>;
  desiredTimeRegister: UseFormRegisterReturn<'desiredTime'>;
  isAvailableStartCountdown: boolean;
  handleDesiredTimeOnClick: (add: boolean) => void;
  onSubmit: (data: FormType) => void;
  handleSubmit: UseFormHandleSubmit<FormType, undefined>;
}

type FormRegister = keyof FormType;

export type { FormProviderProps, FormContextType, FormType, FormRegister };
