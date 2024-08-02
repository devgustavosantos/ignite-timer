import { FormProvider } from '@/contexts/Form';
import { TasksProvider } from '@/contexts/Tasks';

import { Router } from './Router';
import { Styles } from './styles';

function App() {
  return (
    <Styles>
      <TasksProvider>
        <FormProvider>
          <Router />
        </FormProvider>
      </TasksProvider>
    </Styles>
  );
}

export default App;
