import NextAuth from 'next-auth';
import { cookies } from 'next/headers';
import CredentialsProvider from 'next-auth/providers/credentials';
import { jwtDecode } from 'jwt-decode';
import type { NextAuthOptions } from 'next-auth';

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(_, req) {
        const accessToken = req.query?.accessToken ?? null;
        cookies().set('ACCESS_TOKEN', accessToken, { httpOnly: true, secure: true });
        if (accessToken) {
          return jwtDecode(accessToken);
        }
        return null;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      return {
        user: { ...session.user, ...token },
        expires: session.expires
      };
    }
  }
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
