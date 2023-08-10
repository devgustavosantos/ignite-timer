import { Clock, Scroll } from '@phosphor-icons/react';

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
          <li>
            <S.Link href="#">
              <Clock />
            </S.Link>
          </li>

          <li>
            <S.Link href="#">
              <Scroll />
            </S.Link>
          </li>
        </S.UnorderedList>
      </nav>
    </S.Header>
  );
}
