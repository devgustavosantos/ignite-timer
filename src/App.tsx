import { TasksProvider } from '@/contexts/Tasks';

import { Router } from './Router';
import { Styles } from './styles';

function App() {
  return (
    <Styles>
      <TasksProvider>
        <Router />
      </TasksProvider>
    </Styles>
  );
}

export default App;
