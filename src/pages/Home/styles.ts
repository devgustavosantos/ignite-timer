import { Minus, Plus } from '@phosphor-icons/react';
import { css, styled } from 'styled-components';

import { BREAKPOINTS } from '../../styles/breakpoints';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 10rem;
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.BLACK_800};
  border-radius: 8rem;
  max-width: 1120rem;
  padding: 40rem;
  width: 100%;
`;

const Form = styled.form`
  font-size: 18rem;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8rem;
  margin: 72rem auto 120rem;
  max-width: 656rem;
`;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: ${BREAKPOINTS.medium}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const TaskInput = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.GRAY_900};
  color: ${({ theme }) => theme.GRAY_900};
  font-size: inherit;
  font-weight: inherit;
  min-width: 250rem;
  text-align: center;
`;

const MinutesContainer = styled.div`
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.GRAY_900};
  color: ${({ theme }) => theme.GRAY_900};
  display: flex;
  justify-content: space-between;
  min-width: 80px;
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

const iconsStyles = css`
  font-size: 16rem;
`;

const MinusIcon = styled(Minus)`
  ${iconsStyles}
`;

const PlusIcon = styled(Plus)`
  ${iconsStyles}
`;

export {
  Container,
  Form,
  Label,
  Main,
  MinusIcon,
  MinutesButtons,
  MinutesContainer,
  MinutesInput,
  PlusIcon,
  TaskInput,
};
