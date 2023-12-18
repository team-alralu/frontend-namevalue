/* @jsxImportSource react */

import { Inter } from 'next/font/google';
import { EmotionProvider } from '@libraries/emotion/EmotionProvider';
import { RootContainer } from '@layouts/mixins/RootContainer';
import { AuthProvider } from '@auth/components/AuthProvider';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Name Value',
  description: '당신의 이름의 가치는??'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <AuthProvider>
      <EmotionProvider>
        <body className={inter.className}>
          <RootContainer>{children}</RootContainer>
        </body>
      </EmotionProvider>
    </AuthProvider>
  </html>
);

export default RootLayout;
