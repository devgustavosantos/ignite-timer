import { styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles/breakpoints';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: clamp(12rem, 15vw - 125rem, 80rem);

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
  width: 100%;
  max-height: 740rem;
  height: 100%;
  padding: 40rem;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding: 20rem;
    max-height: initial;
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    border-radius: 0;
    align-self: stretch;
  }
`;

export { Container, Wrapper };
