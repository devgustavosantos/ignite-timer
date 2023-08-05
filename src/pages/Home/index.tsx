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

          <div>
            <span>0</span>
            <span>0</span>
            <span>:</span>
            <span>0</span>
            <span>0</span>
          </div>

          <button>
            <Play /> Começar
          </button>
        </S.Form>
      </S.Main>
    </S.Container>
  );
}
