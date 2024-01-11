'use client';

import Image from 'next/image';
import { Button, Stack, Text } from '@layouts/components';
import { NAVER_LOGIN_URL, GOOGLE_LOGIN_URL } from '../constants';
import Link from 'next/link';
import Logo from '../../../public/logo.png';

export const Login = () => {
  return (
    <Stack justify="center" align="center" style={{ height: '100vh', position: 'relative' }}>
      <Image
        src={Logo}
        alt="logo"
        aria-label="application logo image"
        width={300}
        height={242}
        style={{ marginBottom: '80px' }}
      />
      <Button size="lg" variant="outline" colorScheme="green" width="288px" style={{ marginBottom: '32px' }}>
        <Link href={NAVER_LOGIN_URL}>네이버 계정으로 로그인</Link>
      </Button>
      <Button size="lg" variant="outline" colorScheme="blue" width="288px">
        <Link href={GOOGLE_LOGIN_URL}>Google 계정으로 로그인</Link>
      </Button>
      <Text colorScheme="disabled" size="sm" style={{ position: 'absolute', bottom: '16px' }}>
        Team Alaru
      </Text>
    </Stack>
  );
};
