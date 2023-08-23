import { styled } from 'styled-components';

import { BREAKPOINTS } from '../../styles/breakpoints';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 10rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    background-color: ${({ theme }) => theme.BLACK_800};
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.BLACK_800};
  border-radius: 8rem;
  max-width: 1120rem;
  padding: 40rem;
  width: 100%;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding: 20rem;
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    border-radius: 0;
    height: 100%;
  }
`;

export { Container, Wrapper };
