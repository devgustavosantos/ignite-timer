import { UseStartStopButtonProps } from './types';

export function useStartStopButton({
  isStartButton,
  disabled,
}: UseStartStopButtonProps) {
  const shouldTooltipDisplayed = disabled && isStartButton;

  return {
    shouldTooltipDisplayed,
  };
}
