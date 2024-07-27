import { Tooltip } from 'react-tooltip';

import { useStartStopButton } from './hook';
import * as S from './styles';
import { ButtonStartStopProps } from './types';

export function StartStopButton({
  isStartButton,
  disabled,
}: ButtonStartStopProps) {
  const { shouldTooltipDisplayed } = useStartStopButton({
    isStartButton,
    disabled,
  });

  return (
    <S.Container
      isStartButton={isStartButton}
      disabled={disabled}
      type={isStartButton ? 'submit' : 'button'}
      data-tooltip-id="button-play-stop"
    >
      {isStartButton ? <S.PlayIcon /> : <S.StopIcon />}

      <S.ButtonText>{isStartButton ? 'Começar' : 'Interromper'}</S.ButtonText>

      {shouldTooltipDisplayed && (
        <Tooltip
          id="button-play-stop"
          className="tooltip custom-tooltip"
        >
          Preencha o nome e a duração antes de começar.
        </Tooltip>
      )}
    </S.Container>
  );
}
