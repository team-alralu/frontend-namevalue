'use client';

import { ReactNode } from 'react';
import { Stack } from '@layouts/components';

export const Center = ({ children }: { children: ReactNode }) => {
  return (
    <Stack justify="center" align="center" style={{ height: '100dvh' }}>
      {children}
    </Stack>
  );
};
