import { TasksAction } from '@/types/task';

type ToastMessages = {
  [K in TasksAction['type']]: string;
};

export const toastMessages: ToastMessages = {
  create: 'Tarefa Criada!',
  interrupt: 'Tarefa Interrompida!',
  finished: 'Tarefa Finalizada!',
};
