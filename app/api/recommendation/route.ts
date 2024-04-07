import {NextRequest, NextResponse} from "next/server";
import {getUserInfo} from "@/lib/db_mongo";
import {getRecomendations} from "@/lib/db_neon";
import {getSession} from "@auth0/nextjs-auth0";

export async function GET(req: NextRequest): Promise<NextResponse> {
    const session = await getSession()
    if (!session)
        return new NextResponse(undefined, {status: 403})
    const info = await getUserInfo(session.user.sub.substring(6))
    return new NextResponse(JSON.stringify(info), {status: 200})
/*

    if (!info.questionnaire)
        return new NextResponse(JSON.stringify([]), {status: 200})

    const q = info.questionnaire
    return new NextResponse(JSON.stringify(await getRecomendations(q.interests ? q.interests : [], q.risk, q.length, 10)), {status: 200})
*/}