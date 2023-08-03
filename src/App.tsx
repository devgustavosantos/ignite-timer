import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import { COLORS } from './styles/colors';
import { Styles } from './styles/index';

function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <Styles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
