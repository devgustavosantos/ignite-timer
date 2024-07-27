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
      type={isCountdownStopped ? 'submit' : 'button'}
      data-tooltip-id="button-play"
    >
      {isCountdownStopped ? <S.PlayIcon /> : <S.StopIcon />}

      <S.ButtonText title="Iniciar ou interromper a contagem">
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
