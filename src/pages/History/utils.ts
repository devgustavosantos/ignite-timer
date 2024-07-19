import { StatusGroup } from './types';

const statusTranslation: StatusGroup = {
  ongoing: 'Em andamento',
  concluded: 'Concluído',
  interrupted: 'Interrompido',
};

const statusColors: StatusGroup = {
  ongoing: 'YELLOW_900',
  concluded: 'GREEN_800',
  interrupted: 'RED_800',
};

export { statusTranslation, statusColors };
