/* @jsxImportSource react */

import { Inter } from 'next/font/google';
import { EmotionProvider } from '@libraries/emotion/EmotionProvider';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Name Value',
  description: '당신의 이름의 가치는??'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <EmotionProvider>
      <body className={inter.className}>{children}</body>
    </EmotionProvider>
  </html>
);

export default RootLayout;
