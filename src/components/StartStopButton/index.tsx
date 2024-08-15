import { Tooltip } from 'react-tooltip';

import * as S from './styles';
import { ButtonStartStopProps } from './types';

export function StartStopButton({
  isStartButton,
  disabled,
  onClick,
}: ButtonStartStopProps) {
  return isStartButton ? (
    <S.Container
      disabled={disabled}
      type="submit"
      data-tooltip-id="button-play-stop"
      isStartButton
    >
      <S.PlayIcon />
      <S.ButtonText>Começar</S.ButtonText>

      {disabled && (
        <Tooltip
          id="button-play-stop"
          className="tooltip custom-tooltip"
        >
          Preencha o nome e a duração antes de começar.
        </Tooltip>
      )}
    </S.Container>
  ) : (
    <S.Container
      type="button"
      onClick={onClick}
    >
      <S.StopIcon />

      <S.ButtonText>Interromper</S.ButtonText>
    </S.Container>
  );
}
