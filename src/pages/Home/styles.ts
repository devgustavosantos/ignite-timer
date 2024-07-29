import { styled } from 'styled-components';

import { BREAKPOINTS } from '@/styles/breakpoints';

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

  &::-webkit-calendar-picker-indicator {
    display: none !important;
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

  &:invalid {
    color: ${({ theme }) => theme.GRAY_900};
  }

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

export {
  Container,
  Form,
  Label,
  MinutesButtons,
  MinutesContainer,
  MinutesInput,
  TaskInput,
};
