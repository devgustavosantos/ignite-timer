import { styled } from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

const Link = styled.a`
  font-size: 32rem;
`;

export { Header, Link, Logo, UnorderedList };
