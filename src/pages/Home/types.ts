import * as z from 'zod';

import { TaskSchema } from '@/types/task';

const FormSchema = TaskSchema.pick({ name: true, desiredTime: true });

type FormType = z.infer<typeof FormSchema>;

type FormRegister = keyof FormType;

export { FormSchema };
export type { FormType, FormRegister };
