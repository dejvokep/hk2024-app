import {NextRequest, NextResponse} from "next/server";
import {getAssistantResponse} from "@/lib/ai_assistant";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const prompt = (await req.json()).prompt

    return new NextResponse(await getAssistantResponse(prompt), {status: 200})
}