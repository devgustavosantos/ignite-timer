import { memo } from 'react';

import { useCountdown } from './hook.ts';
import * as S from './styles';

function CountdownComponent() {
  const { minutesToDisplayed, secondesToDisplayed } = useCountdown();

  return (
    <S.Container>
      <S.Number>{minutesToDisplayed[0]}</S.Number>
      <S.Number>{minutesToDisplayed[1]}</S.Number>
      <S.NumberSeparator>:</S.NumberSeparator>
      <S.Number>{secondesToDisplayed[0]}</S.Number>
      <S.Number>{secondesToDisplayed[1]}</S.Number>
    </S.Container>
  );
}

export const Countdown = memo(CountdownComponent);
