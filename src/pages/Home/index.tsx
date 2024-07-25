/* eslint-disable import-helpers/order-imports */
import { Minus, Plus } from '@phosphor-icons/react';

import { StartStopButton } from '@components/StartStopButton';

import { useHome } from './hook';
import * as S from './styles';
import { DESIRED_TIME } from './utils';

export function Home() {
  const {
    taskName,
    setTaskName,
    desiredTime,
    handleDesiredTimeOnClick,
    handleDesiredTimeOnChange,
    handleDesiredTimeOnBlur,
  } = useHome();

  return (
    <S.Container>
      <S.Form>
        <S.Label>
          Vou trabalhar em
          <S.TaskInput
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="suggestions"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          durante
          <S.MinutesContainer>
            <S.MinutesButtons
              type="button"
              onClick={() => handleDesiredTimeOnClick(false)}
            >
              <Minus />
            </S.MinutesButtons>
            <S.MinutesInput
              type="text"
              placeholder="00"
              value={desiredTime}
              max={DESIRED_TIME.max}
              min={DESIRED_TIME.min}
              onChange={handleDesiredTimeOnChange}
              onBlur={handleDesiredTimeOnBlur}
            />
            <S.MinutesButtons
              type="button"
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

        <StartStopButton />
      </S.Form>
    </S.Container>
  );
}
