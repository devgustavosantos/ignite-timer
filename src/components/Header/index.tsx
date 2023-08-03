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
            <a href="#">
              <S.ClockIcon />
            </a>
          </li>

          <li>
            <a href="#">
              <S.ScrollIcon />
            </a>
          </li>
        </S.UnorderedList>
      </nav>
    </S.Header>
  );
}
