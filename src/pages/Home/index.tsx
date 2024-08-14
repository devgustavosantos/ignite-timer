// eslint-disable-next-line import-helpers/order-imports
import { Countdown } from '@/components/Countdown';
import { Datalist } from '@/components/Datalist';
import { StartStopButton } from '@/components/StartStopButton';
import { useFormContext } from '@/contexts/Form';
import { useTasksContext } from '@/contexts/Tasks';
import { TASK } from '@/utils/task';
import { Minus, Plus } from '@phosphor-icons/react';

import * as S from './styles';

export function Home() {
  const {
    handleDesiredTimeOnClick,
    taskNameRegister,
    desiredTimeRegister,
    isAvailableStartCountdown,
    onSubmit,
    handleSubmit,
  } = useFormContext();

  const { tasks, dispatch } = useTasksContext();

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>
          Vou trabalhar em
          <S.TaskInput
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="suggestions"
            {...taskNameRegister}
          />
          durante
          <S.MinutesContainer>
            <S.MinutesButtons
              type="button"
              title="Diminuir o tempo desejado"
              onClick={() => handleDesiredTimeOnClick(false)}
            >
              <Minus />
            </S.MinutesButtons>
            <S.MinutesInput
              type="number"
              required
              max={TASK.desiredTime.max}
              min={TASK.desiredTime.min}
              {...desiredTimeRegister}
            />
            <S.MinutesButtons
              type="button"
              title="Aumentar o tempo desejado"
              onClick={() => handleDesiredTimeOnClick(true)}
            >
              <Plus />
            </S.MinutesButtons>
          </S.MinutesContainer>
          minutos.
        </S.Label>

        <Datalist />

        <Countdown />

        <StartStopButton
          disabled={!isAvailableStartCountdown}
          isStartButton={!tasks.current}
          onClick={() => dispatch({ type: 'interrupt' })}
        />
      </S.Form>
    </S.Container>
  );
}
