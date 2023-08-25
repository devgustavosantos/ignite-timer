import 'simplebar-react/dist/simplebar.min.css';
import * as S from './styles';

export function History() {
  const tasks = new Array(50).fill({
    name: 'Teste',
    duration: '10 minutos',
    startedAt: String('inciado no dia ' + new Date().getDate()),
    status: 'Em andamento',
  });

  return (
    <>
      <S.Title>Meu histórico</S.Title>

      <S.SimpleBarContainer>
        <S.CustomSimplebar data-test="CustomSimplebar">
          <table>
            <S.THead>
              <S.TRowOfHead>
                <S.TDataOfHead>Tarefa</S.TDataOfHead>
                <S.TDataOfHead>Duração</S.TDataOfHead>
                <S.TDataOfHead>Inicio</S.TDataOfHead>
                <S.TDataOfHead>Status</S.TDataOfHead>
              </S.TRowOfHead>
            </S.THead>
            <tbody>
              {tasks.map((task) => {
                return (
                  <S.TRowOfBody key={String(Math.random())}>
                    <S.TDataOfBody>{task.name}</S.TDataOfBody>
                    <S.TDataOfBody>{task.duration}</S.TDataOfBody>
                    <S.TDataOfBody>{task.startedAt}</S.TDataOfBody>
                    <S.TDataOfBody>{task.status}</S.TDataOfBody>
                  </S.TRowOfBody>
                );
              })}
            </tbody>
          </table>
        </S.CustomSimplebar>
      </S.SimpleBarContainer>
    </>
  );
}
