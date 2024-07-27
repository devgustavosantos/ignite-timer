import { ButtonHTMLAttributes } from 'react';

interface ButtonStartStopProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
  isStartButton: boolean;
}

type UseStartStopButtonProps = Pick<
  ButtonStartStopProps,
  'disabled' | 'isStartButton'
>;

export type { ButtonStartStopProps, UseStartStopButtonProps };
