import { Minus, Plus } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';

import * as S from './styles';

export function Home() {
  const isCountdownStopped = true;
  // const isCountdownStopped = false;

  const isButtonPlayStopDisable = true;
  // const isButtonPlayStopDisable = false;

  return (
    <S.Container>
      <S.Form>
        <S.Label>
          Vou trabalhar em
          <S.TaskInput
            type="text"
            placeholder="Dê um nome para o seu projeto"
          />
          durante
          <S.MinutesContainer>
            <S.MinutesButtons type="button">
              <Minus />
            </S.MinutesButtons>
            <S.MinutesInput
              type="number"
              placeholder="00"
            />
            <S.MinutesButtons type="button">
              <Plus />
            </S.MinutesButtons>
          </S.MinutesContainer>
          minutos.
        </S.Label>

        <S.NumbersContainer>
          <S.Number>0</S.Number>
          <S.Number>0</S.Number>
          <S.NumberSeparator>:</S.NumberSeparator>
          <S.Number>0</S.Number>
          <S.Number>0</S.Number>
        </S.NumbersContainer>

        <S.ButtonPlayStop
          isActive={isCountdownStopped}
          disabled={isButtonPlayStopDisable}
          data-tooltip-id="button-play"
        >
          {isCountdownStopped ? <S.PlayIcon /> : <S.StopIcon />}

          <S.ButtonText>
            {isCountdownStopped ? 'Começar' : 'Interromper'}
          </S.ButtonText>

          {isCountdownStopped && isButtonPlayStopDisable && (
            <Tooltip
              id="button-play"
              className="tooltip custom-tooltip"
            >
              Preencha o nome e a duração antes de começar.
            </Tooltip>
          )}
        </S.ButtonPlayStop>
      </S.Form>
    </S.Container>
  );
}
