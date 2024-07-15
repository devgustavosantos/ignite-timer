import { ThemeProvider } from 'styled-components';
import 'react-tooltip/dist/react-tooltip.css';

import { COLORS } from './colors';
import { Global } from './global';
import { Reset } from './reset';
import { StylesProps } from './types';

export function Styles({ children }: StylesProps) {
  return (
    <ThemeProvider theme={COLORS}>
      <Reset />
      <Global />
      {children}
    </ThemeProvider>
  );
}
