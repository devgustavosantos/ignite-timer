import { Minus, Plus } from '@phosphor-icons/react';

import { StartStopButton } from './components/StartStopButton';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <S.Form>
        <S.Label>
          Vou trabalhar em
          <S.TaskInput
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="suggestions"
          />
          durante
          <S.MinutesContainer>
            <S.MinutesButtons type="button">
              <Minus />
            </S.MinutesButtons>
            <S.MinutesInput
              type="number"
              placeholder="00"
            />
            <S.MinutesButtons type="button">
              <Plus />
            </S.MinutesButtons>
          </S.MinutesContainer>
          minutos.
        </S.Label>

        <datalist id="suggestions">
          <option value="tarefa 1" />
          <option value="tarefa 2" />
          <option value="tarefa 3" />
        </datalist>

        <S.NumbersContainer>
          <S.Number>0</S.Number>
          <S.Number>0</S.Number>
          <S.NumberSeparator>:</S.NumberSeparator>
          <S.Number>0</S.Number>
          <S.Number>0</S.Number>
        </S.NumbersContainer>

        <StartStopButton />
      </S.Form>
    </S.Container>
  );
}
