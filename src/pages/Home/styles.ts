import { styled } from 'styled-components';

import { BREAKPOINTS } from '../../styles/breakpoints';

const Container = styled.main`
  max-width: 656rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    margin: 0 auto;
  }
`;

const Form = styled.form`
  font-size: 18rem;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8rem;
  width: 100%;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    margin: 40rem 0;
    max-width: initial;
  }
`;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const TaskInput = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.GRAY_900};
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  min-width: 250rem;
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.GRAY_900};
  }
`;

const MinutesContainer = styled.div`
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.GRAY_900};
  color: ${({ theme }) => theme.GRAY_900};
  display: flex;
  justify-content: space-between;
  min-width: 80px;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    min-width: initial;
    gap: 10px;
  }
`;

const MinutesInput = styled.input`
  background-color: transparent;
  border: 0;
  font-size: inherit;
  font-weight: inherit;
  text-align: center;
  width: 21rem;

  /* stylelint-disable-next-line */
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;

    /* stylelint-disable-next-line */
    -webkit-appearance: none;
  }
`;

const MinutesButtons = styled.button`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  display: flex;
  align-items: center;
`;

const NumbersContainer = styled.div`
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

const ButtonPlayStop = styled.button`
  width: 100%;
  height: 64rem;
  padding: 16rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  border-radius: 8rem;
  margin-top: 56rem;
  color: ${({ theme }) => theme.WHITE_900};
  font-size: 20rem;
`;

const ButtonPlay = styled(ButtonPlayStop)`
  background-color: ${({ theme }) => theme.GREEN_800};
`;

const ButtonStop = styled(ButtonPlayStop)`
  background-color: ${({ theme }) => theme.RED_800};
`;

const ButtonText = styled.span`
  font-size: 16rem;
  font-weight: 700;
`;

export {
  ButtonPlay,
  ButtonStop,
  ButtonText,
  Container,
  Form,
  Label,
  MinutesButtons,
  MinutesContainer,
  MinutesInput,
  Number,
  NumberSeparator,
  NumbersContainer,
  TaskInput,
};
