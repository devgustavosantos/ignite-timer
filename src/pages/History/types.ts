import z from 'zod';

export const status = z.enum(['ongoing', 'concluded', 'interrupted']);

type StatusGroup = { [K in z.infer<typeof status>]: string };

type StatusVariations = keyof StatusGroup;

interface TaskStatusProps
  extends React.HTMLAttributes<HTMLTableDataCellElement> {
  situation: StatusVariations;
}

export type { StatusGroup, StatusVariations, TaskStatusProps };
