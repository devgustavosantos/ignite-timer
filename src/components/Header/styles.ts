import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 40rem;
  height: 40rem;
`;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 8rem;

  .tooltip.custom-tooltip {
    transform: translateY(8px);
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled(NavLink)`
  font-size: 32rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3rem solid transparent;
  border-bottom: 3rem solid transparent;
  padding: 10rem;

  &.active {
    svg {
      fill: ${({ theme }) => theme.GREEN_900};
    }
  }

  &:hover {
    border-bottom-color: ${({ theme }) => theme.GREEN_900};
  }
`;

export { ListItem, Header, Link, Logo, UnorderedList };
