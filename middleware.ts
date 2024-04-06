import {getSession} from '@auth0/nextjs-auth0/edge';
import {NextRequest, NextResponse} from "next/server";

export default async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const user = await getSession();

    if (!user)
        return NextResponse.redirect(req.nextUrl.origin)

    return res
}

export const config = {
    matcher: '/(zone.*)'
};