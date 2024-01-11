'use client';

import { Global, ThemeProvider } from '@emotion/react';
import theme from '@libraries/emotion/theme';
import resetStyle from '../styles/resetStyle';

interface Props {
  children: React.ReactNode;
}

export const GlobalStyle = ({ children }: Props) => (
  <>
    <Global styles={resetStyle} />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
