import SimpleBar from 'simplebar-react';
import styled, { css } from 'styled-components';

import { BREAKPOINTS } from '../../styles/breakpoints';

const Title = styled.h1`
  font-size: 24rem;
  font-style: normal;
  font-weight: 700;
  line-height: 38.4rem;
  margin: 50rem 0 32rem;
`;

const THead = styled.thead`
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 4rem solid ${({ theme }) => theme.BLACK_800};
`;

const TRow = styled.tr`
  display: grid;
  grid-template-columns: minmax(200rem, 1fr) 80rem 131rem 111rem;
  text-align: left;
  gap: 24rem;
  padding: 16rem 24rem;
  width: 100%;
  min-width: fit-content;
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
  font-weight: 700;
  line-height: 160%;
`;

const TDataOfHead = styled.th`
  ${TextStyles}
`;

const TDataOfBody = styled.td`
  ${TextStyles}
`;

const SimpleBarContainer = styled.div`
  flex-grow: 1;
  position: relative;
`;

const CustomSimplebar = styled(SimpleBar)`
  .simplebar-track {
    &.simplebar-vertical {
      height: calc(100% - 60rem);
      transform: translateY(60rem);
    }

    .simplebar-scrollbar::before {
      background-color: ${({ theme }) => theme.GRAY_800};

      .simplebar-vertical {
        width: 6rem;
        margin-right: 5px;
      }
    }
  }

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export {
  CustomSimplebar,
  SimpleBarContainer,
  TDataOfBody,
  TDataOfHead,
  THead,
  TRow,
  TRowOfBody,
  TRowOfHead,
  Title,
};
