import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { CustomSimpleBar } from '@/components/CustomSimpleBar';
import { useTasksContext } from '@/contexts/Tasks';

import { useHistory } from './hook';
import * as S from './styles';
import { statusTranslation } from './utils';

export function History() {
  const { tasks } = useTasksContext();

  const { getTaskStatus } = useHistory();

  return (
    <S.Container>
      <S.Title>Meu histórico</S.Title>

      <CustomSimpleBar>
        <S.Table>
          <S.THead>
            <S.TRowOfHead>
              <S.TDataOfHead>Tarefa</S.TDataOfHead>
              <S.TDataOfHead>Duração</S.TDataOfHead>
              <S.TDataOfHead>Inicio</S.TDataOfHead>
              <S.TDataOfHead>Status</S.TDataOfHead>
            </S.TRowOfHead>
          </S.THead>
          <S.TBody>
            {tasks.map((task) => (
              <S.TRowOfBody key={String(task.createdAt)}>
                <S.TDataOfBody>{task.name}</S.TDataOfBody>
                <S.TDataOfBody>{task.desiredTime} minutos</S.TDataOfBody>
                <S.TDataOfBody>
                  {formatDistanceToNow(task.createdAt, { locale: ptBR })}
                </S.TDataOfBody>
                <S.TaskStatus situation={getTaskStatus(task)}>
                  {statusTranslation[getTaskStatus(task)]}
                </S.TaskStatus>
              </S.TRowOfBody>
            ))}
          </S.TBody>
        </S.Table>
      </CustomSimpleBar>
    </S.Container>
  );
}
