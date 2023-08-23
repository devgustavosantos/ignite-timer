import { HandPalm, Minus, Play, Plus } from '@phosphor-icons/react';

import * as S from './styles';

export function Home() {
  const renderButtonPlay = true;

  return (
    <S.Container>
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

        <S.NumbersContainer>
          <S.Number>0</S.Number>
          <S.Number>0</S.Number>
          <S.NumberSeparator>:</S.NumberSeparator>
          <S.Number>0</S.Number>
          <S.Number>0</S.Number>
        </S.NumbersContainer>

        {renderButtonPlay ? (
          <S.ButtonPlay>
            <Play />
            <S.ButtonText>Começar</S.ButtonText>
          </S.ButtonPlay>
        ) : (
          <S.ButtonStop>
            <HandPalm />
            <S.ButtonText>Interromper</S.ButtonText>
          </S.ButtonStop>
        )}
      </S.Form>
    </S.Container>
  );
}
