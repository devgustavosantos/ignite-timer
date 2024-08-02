import { createContext, useContext } from 'react';

import { TasksContextType } from './types';

const TasksContext = createContext({} as TasksContextType);
const useTasksContext = () => useContext(TasksContext);

export { TasksContext, useTasksContext };
export { TasksProvider } from './Provider.tsx';
