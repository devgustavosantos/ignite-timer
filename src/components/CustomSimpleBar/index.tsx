import 'simplebar-react/dist/simplebar.min.css';
import { useCustomSimpleBar } from './hook';
import * as S from './styles';
import { CustomSimpleBarProps } from './types';

export function CustomSimpleBar({ children }: CustomSimpleBarProps) {
  const { scrollBarContainer, scrollBarMaxHeight } = useCustomSimpleBar();

  return (
    <S.Container ref={scrollBarContainer}>
      <S.Wrapper style={{ maxHeight: scrollBarMaxHeight }}>
        {children}
      </S.Wrapper>
    </S.Container>
  );
}
