import { memo } from 'react';

import * as S from './styles';

function CountdownComponent() {
  return (
    <S.Container>
      <S.Number>0</S.Number>
      <S.Number>0</S.Number>
      <S.NumberSeparator>:</S.NumberSeparator>
      <S.Number>0</S.Number>
      <S.Number>0</S.Number>
    </S.Container>
  );
}

export const Countdown = memo(CountdownComponent);
