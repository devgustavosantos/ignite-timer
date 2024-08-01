import * as z from 'zod';

import { DESIRED_TIME, TASK_NAME } from './utils';

const FormSchema = z
  .object({
    name: z.string().min(TASK_NAME.min).max(TASK_NAME.max).trim(),
    desiredTime: z.number().int().min(DESIRED_TIME.min).max(DESIRED_TIME.max),
  })
  .required();

const TaskSchema = FormSchema.extend({
  createdAt: z.date(),
  interruptedAt: z.date().optional(),
  finishedAt: z.date().optional(),
});

type FormType = z.infer<typeof FormSchema>;
type TaskType = z.infer<typeof TaskSchema>;

type FormRegister = keyof FormType;

export { FormSchema };
export type { FormType, TaskType, FormRegister };
