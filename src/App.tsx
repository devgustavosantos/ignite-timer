import { BrowserRouter } from 'react-router-dom';

import { Router } from './Routes';
import { Styles } from './styles/index';

function App() {
  return (
    <BrowserRouter>
      <Styles>
        <Router />
      </Styles>
    </BrowserRouter>
  );
}

export default App;
