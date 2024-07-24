import { Outlet } from 'react-router-dom';

import { Header } from '@components/Header';

import * as S from './styles';

export function DefaultLayout() {
  return (
    <S.Container>
      <S.Wrapper>
        <Header />
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
}
