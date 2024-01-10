'use client';
import { useLogin } from '../hooks/useLogin';
import { Center } from '@layouts/mixins/Center';
import { Loading, Text } from '@layouts/components';

export const AuthCheck = ({ accessToken }: { accessToken: string }) => {
  const logged = useLogin(accessToken);
  if (logged) {
    return null;
  }
  return (
    <Center>
      <Loading style={{ background: '#ffffff' }} />
      <Text>로그인중이에요, 잠시만 기다려주세요.</Text>
    </Center>
  );
};
