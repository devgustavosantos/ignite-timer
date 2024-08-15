import { createContext, useContext } from 'react';

import { FormContextType } from './types';

const FormContext = createContext({} as FormContextType);
const useFormContext = () => useContext(FormContext);

export { FormContext, useFormContext };
export { FormProvider } from './Provider.tsx';
