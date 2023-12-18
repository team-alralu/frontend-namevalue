'use client';
import { useClientMounted } from '@shared/hooks/useClientMounted';
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';

export const AuthCheck = ({ accessToken }: { accessToken: string }) => {
  const { isMounted } = useClientMounted();
  const session = useSession();
  if (!session.data && isMounted) {
    signIn(
      'credentials',
      {
        callbackUrl: '/'
      },
      { accessToken: accessToken }
    );
  }
  return null;
};
