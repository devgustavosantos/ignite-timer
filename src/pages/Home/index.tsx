import { Play } from '@phosphor-icons/react';

import { Header } from '../../components/Header';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <S.Main>
        <Header />

        <S.Form>
          <S.Label>
            Vou trabalhar em
            <S.TaskInput
              type="text"
              placeholder="Dê um nome para o seu projeto"
            />
            durante
            <S.MinutesContainer>
              <S.MinutesButtons type="button">
                <S.MinusIcon />
              </S.MinutesButtons>
              <S.MinutesInput
                type="number"
                placeholder="00"
              />
              <S.MinutesButtons type="button">
                <S.PlusIcon />
              </S.MinutesButtons>
            </S.MinutesContainer>
            minutos.
          </S.Label>

          <S.NumbersContainer>
            <S.Number>0</S.Number>
            <S.Number>0</S.Number>
            <S.NumberSeparator>:</S.NumberSeparator>
            <S.Number>0</S.Number>
            <S.Number>0</S.Number>
          </S.NumbersContainer>

          <button>
            <Play /> Começar
          </button>
        </S.Form>
      </S.Main>
    </S.Container>
  );
}
