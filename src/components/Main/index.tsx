import { Header } from '../Header';
import * as S from './styles';

interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <S.Container>
      <S.Main>
        <Header />

        {children}
      </S.Main>
    </S.Container>
  );
}
