import * as z from 'zod';

import { TASK } from '@/utils/task';

const TaskSchema = z.object({
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
type TaskType = z.infer<typeof TaskSchema>;

const CreateTaskSchema = TaskSchema.pick({ name: true, desiredTime: true });
type CreateTaskType = z.infer<typeof CreateTaskSchema>;

export { CreateTaskSchema, TaskSchema };
export type { TaskType, CreateTaskType };
