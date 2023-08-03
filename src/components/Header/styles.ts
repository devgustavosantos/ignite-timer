import { Clock, Scroll } from '@phosphor-icons/react';
import { css, styled } from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 40rem;
  height: 40rem;
`;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 8rem;
`;

const iconsStyles = css`
  font-size: 32rem;
`;

const ClockIcon = styled(Clock)`
  ${iconsStyles}
`;

const ScrollIcon = styled(Scroll)`
  ${iconsStyles}
`;

export { ClockIcon, Header, Logo, ScrollIcon, UnorderedList };
