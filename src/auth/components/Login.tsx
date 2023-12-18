'use client';

import { Button, Stack } from '@layouts/components';
import { NAVER_LOGIN_URL, GOOGLE_LOGIN_URL } from '../contants';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export const Login = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <Stack>
      <Button size="lg" variant="outline" colorScheme="green" width="288px">
        <Link href={NAVER_LOGIN_URL}>네이버 계정으로 로그인</Link>
      </Button>
      <Link href={GOOGLE_LOGIN_URL}>
        <Button size="lg" variant="outline" colorScheme="blue" width="288px">
          Google 계정으로 로그인
        </Button>
      </Link>
    </Stack>
  );
};
