import SimpleBar from 'simplebar-react';
import { styled } from 'styled-components';

import { BREAKPOINTS } from '../../styles/breakpoints';

const Container = styled.div`
  flex-grow: 1;
  position: relative;
`;

const Wrapper = styled(SimpleBar)`
  .simplebar-scrollbar::before {
    background-color: ${({ theme }) => theme.GRAY_800};
    opacity: 100%;
  }

  .simplebar-vertical {
    height: calc(100% - 60rem);
    transform: translateY(60rem);

    .simplebar-scrollbar::before {
      width: 6rem;
      margin-right: 5px;
    }
  }

  .simplebar-horizontal {
    .simplebar-scrollbar::before {
      height: 6rem;
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

export { Container, Wrapper };
