import { styled } from 'styled-components';

const Container = styled.div`
  padding: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Main = styled.main`
  max-width: 1120rem;
  width: 100%;
  padding: 40rem;
  background-color: ${({ theme }) => theme.BLACK_800};
  border-radius: 8rem;
`;

export { Container, Main };
