import {NextRequest, NextResponse} from "next/server";
import {getUserInfo} from "@/lib/db_mongo";
import {getRecomendations} from "@/lib/db_neon";

export async function GET(req: NextRequest): Promise<NextResponse> {
    const info = await getUserInfo("66116391ee779e1b4fd68379")

    if (!info.questionnaire)
        return new NextResponse(JSON.stringify([]), {status: 200})

    const q = info.questionnaire
    return new NextResponse(JSON.stringify(await getRecomendations(q.interests ? q.interests : [], q.risk, q.length, 10)), {status: 200})
}