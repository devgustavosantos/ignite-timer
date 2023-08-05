import { HandPalm, Minus, Play, Plus } from '@phosphor-icons/react';
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

  @media only screen and (max-width: ${BREAKPOINTS.MEDIUM}) {
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

const NumbersContainer = styled.div`
  margin-top: 64rem;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 16rem;
  line-height: 200rem;
  font-family: 'Roboto Mono';
  font-size: 160rem;
`;

const Number = styled.span`
  font-family: inherit;
  font-size: inherit;
  font-style: normal;
  font-weight: 700;
  background-color: ${({ theme }) => theme.BLACK_700};
  border-radius: 8rem;
  padding: 0 14rem;
`;

const NumberSeparator = styled.span`
  color: ${({ theme }) => theme.GREEN_800};
  text-align: center;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
`;

const ButtonPlayStop = styled.button`
  display: block;
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
  font-size: 16rem;
  font-weight: 700;
`;

const ButtonPlay = styled(ButtonPlayStop)`
  background-color: ${({ theme }) => theme.GREEN_800};
`;

const ButtonStop = styled(ButtonPlayStop)`
  background-color: ${({ theme }) => theme.RED_800};
`;

const playStopStyles = css`
  color: inherit;
  font-size: 20rem;
`;

const PlayIcon = styled(Play)`
  ${playStopStyles}
`;

const StopIcon = styled(HandPalm)`
  ${playStopStyles}
`;

export {
  ButtonPlay,
  ButtonStop,
  Container,
  Form,
  Label,
  Main,
  MinusIcon,
  MinutesButtons,
  MinutesContainer,
  MinutesInput,
  Number,
  NumberSeparator,
  NumbersContainer,
  PlayIcon,
  PlusIcon,
  StopIcon,
  TaskInput,
};
