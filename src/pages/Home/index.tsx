// eslint-disable-next-line import-helpers/order-imports
import { Minus, Plus } from '@phosphor-icons/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Countdown } from '@/components/Countdown';
import { Datalist } from '@/components/Datalist';
import { StartStopButton } from '@/components/StartStopButton';
import { useFormContext } from '@/contexts/Form';
import { useTasksContext } from '@/contexts/Tasks';
import { TASK } from '@/utils/task';
import { toastMessages } from '@/utils/toastMessages';

import * as S from './styles';

export function Home() {
  const {
    handleDesiredTimeOnClick,
    taskNameRegister,
    desiredTimeRegister,
    isAvailableStartCountdown,
    onSubmit,
    handleSubmit,
  } = useFormContext();

  const { tasks, dispatch } = useTasksContext();

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>
          Vou trabalhar em
          <S.TaskInput
            type="text"
            placeholder="Dê um nome para o seu projeto"
            list="suggestions"
            {...taskNameRegister}
            disabled={!!tasks.current}
          />
          durante
          <S.MinutesContainer>
            <S.MinutesButtons
              type="button"
              title="Diminuir o tempo desejado"
              onClick={() => handleDesiredTimeOnClick(false)}
              disabled={!!tasks.current}
            >
              <Minus />
            </S.MinutesButtons>
            <S.MinutesInput
              type="number"
              required
              max={TASK.desiredTime.max}
              min={TASK.desiredTime.min}
              {...desiredTimeRegister}
              disabled={!!tasks.current}
            />
            <S.MinutesButtons
              type="button"
              title="Aumentar o tempo desejado"
              onClick={() => handleDesiredTimeOnClick(true)}
              disabled={!!tasks.current}
            >
              <Plus />
            </S.MinutesButtons>
          </S.MinutesContainer>
          minutos.
        </S.Label>

        <Datalist />

        <Countdown />

        <StartStopButton
          disabled={!isAvailableStartCountdown}
          isStartButton={!tasks.current}
          onClick={() => {
            dispatch({ type: 'interrupt' });
            toast(toastMessages.interrupt);
          }}
        />

        <ToastContainer
          position={'bottom-right'}
          autoClose={5000}
          hideProgressBar={true}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          theme={'dark'}
        />
      </S.Form>
    </S.Container>
  );
}
