import {NextResponse} from 'next/server';
import {getToken} from 'next-auth/jwt';
import type {NextRequest} from 'next/server';

export async function middleware(req: NextRequest) {
    const session = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
    const {pathname} = req.nextUrl;

    if (session) {
        if (!pathname.includes('/redirect') && pathname.includes('/sign')) {
            return NextResponse.redirect(new URL('/redirect', req.url));
        }
    } else {
        if (!pathname.includes('/redirect') && !pathname.includes('/sign')) {
            return NextResponse.redirect(new URL('/redirect', req.url));
        }
    }
}
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}