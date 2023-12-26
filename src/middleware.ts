import { JwtPayload, jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface ExtendedJwtPayload extends JwtPayload {
  required_info_reg_flag: boolean;
}

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get('ACCESS_TOKEN');
  if (jwt && jwt.value) {
    const decodedJwt = jwtDecode(jwt.value) as ExtendedJwtPayload;
    if (decodedJwt.required_info_reg_flag) {
      return NextResponse.redirect(new URL('/namevalue', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/registration/:path*']
};
