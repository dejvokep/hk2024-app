import {NextRequest, NextResponse} from "next/server";
import {updateQuestionnaire} from "@/lib/db_mongo";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const body = await req.json()

    try {
        await updateQuestionnaire("66116391ee779e1b4fd68379", body)
    } catch (e) {
        return new NextResponse(undefined, {
            status: 500
        })
    }

    return new NextResponse(undefined, {
        status: 200
    })
}