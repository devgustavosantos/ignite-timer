import * as z from 'zod';

import { TASK } from '@/utils/task';

export const TaskSchema = z.object({
  name: z.string().min(TASK.nameLength.min).max(TASK.nameLength.max).trim(),
  desiredTime: z
    .number()
    .int()
    .min(TASK.desiredTime.min)
    .max(TASK.desiredTime.max),
  createdAt: z.date(),
  interruptedAt: z.date().optional(),
  finishedAt: z.date().optional(),
});

export type TaskType = z.infer<typeof TaskSchema>;
