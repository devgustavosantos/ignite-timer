interface StatusGroup {
  ongoing: string;
  concluded: string;
  interrupted: string;
}

type StatusVariations = keyof StatusGroup;

interface TaskStatusProps
  extends React.HTMLAttributes<HTMLTableDataCellElement> {
  situation: StatusVariations;
}

export type { StatusGroup, StatusVariations, TaskStatusProps };
