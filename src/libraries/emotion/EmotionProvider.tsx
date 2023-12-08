'use client';

import { Global, ThemeProvider } from '@emotion/react';
import theme from './theme';
import globalStyle from '@layouts/styles/resetStyle';

interface Props {
  children: React.ReactNode;
}

export const EmotionProvider = ({ children }: Props) => {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
