import {NextRequest, NextResponse} from "next/server";
import {updateQuestionnaire} from "@/lib/db_mongo";
import {getSession} from "@auth0/nextjs-auth0";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const body = await req.json()
    const session = await getSession()
    if (!session)
        return new NextResponse(undefined, {status: 403})

    try {
        await updateQuestionnaire(session.user.sub.substring(6), body)
    } catch (e) {
        return new NextResponse(undefined, {
            status: 500
        })
    }

    return new NextResponse(undefined, {
        status: 200
    })
}