import { ThemeProvider } from 'styled-components';

import { Header } from './styles';
import { COLORS } from './styles/colors';
import { Styles } from './styles/index';

function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <Styles />
      <div>
        <Header />
        <p>Teste</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
