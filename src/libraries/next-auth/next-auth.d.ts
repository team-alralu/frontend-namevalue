import NextAuth from 'next-auth';

type TokenType = 'accessToken';

declare module 'next-auth' {
  interface Session {
    user: {
      email: `${string}@${string}`;
      exp: number;
      iat: number;
      jti: string;
      name: string;
      sub: string;
    };
    expires: string;
  }
}
