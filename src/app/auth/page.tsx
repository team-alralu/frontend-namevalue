/* @jsxImportSource react */
import { AuthCheck } from '@auth/components/AuthCheck';
import type { ServerPageProps } from '../types';

const AuthCallbackPage = ({ searchParams }: ServerPageProps) => {
  const accessToken = searchParams?.accessToken ?? '';
  return <AuthCheck accessToken={accessToken} />;
};

export default AuthCallbackPage;
