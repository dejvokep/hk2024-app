import {NextRequest} from "next/server";
import {authorize, lucia} from "@/lib/auth";
import {cookies} from "next/headers";
import {redirect, RedirectType} from "next/navigation";
import {response} from "@/lib/responses";

export async function POST(request: NextRequest) {
    const {session} = await authorize()

    if (!session)
        return response(403)

    await lucia.invalidateSession(session.id)

    const cookie = lucia.createBlankSessionCookie()
    cookies().set(cookie.name, cookie.value, cookie.attributes)

    return redirect("/", RedirectType.replace)
}