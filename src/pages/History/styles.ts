import styled, { css } from 'styled-components';

import { Wrapper as SimpleBar } from '../../components/CustomSimpleBar/styles';
import { TaskStatusProps } from './types';
import { statusColors } from './utils';

const Table = styled.table``;

const THead = styled.thead`
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 4rem solid ${({ theme }) => theme.BLACK_800};
  transform: translateY(-1px);
`;

const TBody = styled.tbody``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 932rem;

  &:has(${TBody}:empty) {
    ${SimpleBar} {
      height: 100%;
    }

    .simplebar-content-wrapper {
      overflow: hidden;
      background-color: ${({ theme }) => theme.BLACK_700};
      border-radius: 8rem;
    }

    .simplebar-track.simplebar-vertical {
      display: none;
    }

    ${Table},
    .simplebar-content {
      height: 100%;
    }

    ${THead} {
      border: none;
      transform: none;
    }

    ${TBody} {
      height: 100%;
    }
  }
`;

const Title = styled.h1`
  font-size: 24rem;
  font-style: normal;
  font-weight: 700;
  line-height: 38.4rem;
  margin: 50rem 0 32rem;
`;

const TRow = styled.tr`
  display: grid;
  grid-template-columns: minmax(200rem, 1fr) 80rem 131rem 111rem;
  text-align: left;
  gap: 24rem;
  padding: 16rem 24rem;
  width: 100%;
  min-width: fit-content;
  border: 2px solid transparent;
  transition: all 0.4s;

  &:hover {
    border-color: ${({ theme }) => theme.BLACK_600};
  }
`;

const TRowOfHead = styled(TRow)`
  border-radius: 8rem 8rem 0px 0px;
  background-color: ${({ theme }) => theme.BLACK_600};
`;

const TRowOfBody = styled(TRow)`
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.BLACK_700};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    border-radius: 0px 0px 8rem 8rem;
  }
`;

const TextStyles = css`
  font-size: 14rem;
  font-style: normal;
  line-height: 160%;
  font-weight: 400;
  color: ${({ theme }) => theme.GRAY_700};
`;

const TDataOfHead = styled.th`
  ${TextStyles}
  font-weight: 700;
  color: ${({ theme }) => theme.WHITE_900};
`;

const TDataOfBody = styled.td`
  ${TextStyles}
`;

const TaskStatus = styled.td<TaskStatusProps>`
  ${TextStyles}
  display: inline-flex;
  align-items: center;
  gap: 8rem;

  &::before {
    content: '';
    width: 8rem;
    height: 8rem;
    display: block;
    border-radius: 50%;
    background-color: ${({ theme, situation }) =>
    theme[statusColors[situation]]};
  }
`;

export {
  Container,
  TDataOfBody,
  TDataOfHead,
  THead,
  TRow,
  TRowOfBody,
  TRowOfHead,
  Title,
  TaskStatus,
  TBody,
  Table,
};
