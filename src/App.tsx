import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from './Routes';
import { COLORS } from './styles/colors';
import { Styles } from './styles/index';

function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <Styles />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
