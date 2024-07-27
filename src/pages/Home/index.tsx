/* eslint-disable import-helpers/order-imports */
import { Minus, Plus } from '@phosphor-icons/react';

import { StartStopButton } from '@components/StartStopButton';

import { useHome } from './hook';
import * as S from './styles';
import { DESIRED_TIME } from './utils';

export function Home() {
  const {
    handleDesiredTimeOnClick,
    taskNameRegister,
    desiredTimeRegister,
    isAvailableStartCountdown,
    onSubmit,
    handleSubmit,
  } = useHome();

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
              max={DESIRED_TIME.max}
              min={DESIRED_TIME.min}
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

        <S.NumbersContainer>
          <S.Number>0</S.Number>
          <S.Number>0</S.Number>
          <S.NumberSeparator>:</S.NumberSeparator>
          <S.Number>0</S.Number>
          <S.Number>0</S.Number>
        </S.NumbersContainer>

        <StartStopButton
          disabled={!isAvailableStartCountdown}
          isStartButton={true}
        />
      </S.Form>
    </S.Container>
  );
}
