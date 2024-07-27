import * as z from 'zod';

import { DESIRED_TIME, TASK_NAME } from './utils';

const schema = z
  .object({
    name: z.string().min(TASK_NAME.min).max(TASK_NAME.max).trim(),
    desiredTime: z.number().int().min(DESIRED_TIME.min).max(DESIRED_TIME.max),
  })
  .required();

type Task = z.infer<typeof schema>;

type FormRegister = keyof Task;

export { schema };
export type { Task, FormRegister };
