import { Tooltip } from 'react-tooltip';

import * as S from './styles';

export function StartStopButton() {
  const isCountdownStopped = true;
  // const isCountdownStopped = false;

  // const isButtonPlayStopDisable = true;
  const isButtonPlayStopDisable = false;

  return (
    <S.Container
      isActive={isCountdownStopped}
      disabled={isButtonPlayStopDisable}
      type="button"
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
    </S.Container>
  );
}
