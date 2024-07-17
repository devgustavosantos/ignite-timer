import { Clock, Scroll } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';

import igniteLogo from '../../assets/ignite-logo.svg';
import * as S from './styles';

export function Header() {
  return (
    <S.Header>
      <S.Logo
        src={igniteLogo}
        alt=""
      />

      <nav>
        <S.UnorderedList>
          <S.ListItem data-tooltip-id="timer-page">
            <S.Link to="/">
              <Clock />
            </S.Link>
          </S.ListItem>
          <Tooltip
            id="timer-page"
            className="tooltip custom-tooltip"
          >
            Timer
          </Tooltip>

          <S.ListItem data-tooltip-id="history-page">
            <S.Link to="/history">
              <Scroll />
            </S.Link>
          </S.ListItem>
          <Tooltip
            id="history-page"
            className="tooltip custom-tooltip"
          >
            Histórico
          </Tooltip>
        </S.UnorderedList>
      </nav>
    </S.Header>
  );
}
