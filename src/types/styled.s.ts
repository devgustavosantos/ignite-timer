import 'styled-components';

import { COLORS } from '../styles/colors';

type ThemeType = typeof COLORS;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
