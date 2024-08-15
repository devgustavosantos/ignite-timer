import { styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles/breakpoints';

const Container = styled.div`
  margin-top: 64rem;
  display: flex;
  align-items: center;
  height: 100%;
  line-height: 200rem;
  font-family: 'Roboto Mono', sans-serif;
  font-size: 160rem;
  justify-content: space-between;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: auto auto;
    max-width: 400px;
    margin: 64rem auto 0;
    font-size: 200rem;
    justify-content: initial;
    gap: 16rem;
  }
`;

const Number = styled.span`
  font-family: inherit;
  font-size: inherit;
  font-style: normal;
  font-weight: 700;
  background-color: ${({ theme }) => theme.BLACK_600};
  border-radius: 8rem;
  padding: 0 14rem;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    display: grid;
    place-items: center;
  }
`;

const NumberSeparator = styled.span`
  color: ${({ theme }) => theme.GREEN_800};
  text-align: center;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    display: none;
  }
`;

export { Number, NumberSeparator, Container };
