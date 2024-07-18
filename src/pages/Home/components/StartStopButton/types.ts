import { ButtonHTMLAttributes } from 'react';

interface ButtonPlayStopProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export type { ButtonPlayStopProps };
