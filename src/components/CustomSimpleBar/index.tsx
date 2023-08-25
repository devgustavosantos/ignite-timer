import 'simplebar-react/dist/simplebar.min.css';
import * as S from './styles';
import { CustomSimpleBarProps } from './types';

export function CustomSimpleBar({ children }: CustomSimpleBarProps) {
  return (
    <S.Container>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
}
