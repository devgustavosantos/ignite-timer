// eslint-disable-next-line import-helpers/order-imports
import { Minus, Plus } from '@phosphor-icons/react';

import { Countdown } from '@/components/Countdown';
import { StartStopButton } from '@/components/StartStopButton';
import { useFormContext } from '@/contexts/Form';
import { TASK } from '@/utils/task';

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

        <datalist id="suggestions">
          <option value="tarefa 1" />
          <option value="tarefa 2" />
          <option value="tarefa 3" />
        </datalist>

        <Countdown />

        <StartStopButton
          disabled={!isAvailableStartCountdown}
          isStartButton={true}
        />
      </S.Form>
    </S.Container>
  );
}
