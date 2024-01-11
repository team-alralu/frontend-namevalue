import { useClientMounted } from '@/shared/hooks/useClientMounted';
import { useSession, signIn } from 'next-auth/react';

export const useLogin = (accessToken: string) => {
  const { isMounted } = useClientMounted();
  const session = useSession();

  if (!session.data && isMounted) {
    signIn(
      'credentials',
      {
        callbackUrl: '/registration'
      },
      { accessToken }
    );
    return true;
  }
  return false;
};
