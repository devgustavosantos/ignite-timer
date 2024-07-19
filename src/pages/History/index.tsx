import { CustomSimpleBar } from '../../components/CustomSimpleBar';
import * as S from './styles';
import { StatusVariations } from './types';
import { statusTranslation } from './utils';

export function History() {
  const status: StatusVariations = 'ongoing';

  const task = {
    name: 'Teste',
    duration: '10 minutos',
    startedAt: String('inciado no dia ' + new Date().getDate()),
    status,
  } as const;

  return (
    <S.Container>
      <S.Title>Meu histórico</S.Title>

      <CustomSimpleBar>
        <table>
          <S.THead>
            <S.TRowOfHead>
              <S.TDataOfHead>Tarefa</S.TDataOfHead>
              <S.TDataOfHead>Duração</S.TDataOfHead>
              <S.TDataOfHead>Inicio</S.TDataOfHead>
              <S.TDataOfHead>Status</S.TDataOfHead>
            </S.TRowOfHead>
          </S.THead>
          <tbody>
            <S.TRowOfBody key={String(Math.random())}>
              <S.TDataOfBody>{task.name}</S.TDataOfBody>
              <S.TDataOfBody>{task.duration}</S.TDataOfBody>
              <S.TDataOfBody>{task.startedAt}</S.TDataOfBody>
              <S.TaskStatus situation={task.status}>
                {statusTranslation[task.status]}
              </S.TaskStatus>
            </S.TRowOfBody>

            <S.TRowOfBody key={String(Math.random())}>
              <S.TDataOfBody>{task.name}</S.TDataOfBody>
              <S.TDataOfBody>{task.duration}</S.TDataOfBody>
              <S.TDataOfBody>{task.startedAt}</S.TDataOfBody>
              <S.TaskStatus situation={task.status}>
                {statusTranslation[task.status]}
              </S.TaskStatus>
            </S.TRowOfBody>

            <S.TRowOfBody key={String(Math.random())}>
              <S.TDataOfBody>{task.name}</S.TDataOfBody>
              <S.TDataOfBody>{task.duration}</S.TDataOfBody>
              <S.TDataOfBody>{task.startedAt}</S.TDataOfBody>
              <S.TaskStatus situation={task.status}>
                {statusTranslation[task.status]}
              </S.TaskStatus>
            </S.TRowOfBody>
          </tbody>
        </table>
      </CustomSimpleBar>
    </S.Container>
  );
}
