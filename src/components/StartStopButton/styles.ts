import { styled, css } from 'styled-components';

import { HandPalm, Play } from '@phosphor-icons/react';

import { ButtonStartStopProps } from './types';

const Container = styled.button<ButtonStartStopProps>`
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

  background-color: ${({ isStartButton, theme }) =>
    isStartButton ? theme.GREEN_800 : theme.RED_800};
`;

const iconStyles = css`
  font-size: 1.4em;
`;

const PlayIcon = styled(Play)`
  ${iconStyles}
`;

const StopIcon = styled(HandPalm)`
  ${iconStyles}
`;

const ButtonText = styled.span`
  font-size: 16rem;
  font-weight: 700;
`;

export { Container, PlayIcon, StopIcon, ButtonText };
