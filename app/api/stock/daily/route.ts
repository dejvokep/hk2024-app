import {NextRequest, NextResponse} from "next/server";
import {getDailyStockData} from "@/lib/api_nasdaq";

export async function POST(res: NextRequest): Promise<NextResponse> {
    const body = await res.json()

    const x = await getDailyStockData(body.code, body.from, body.to);
    return new NextResponse(JSON.stringify(x), {
        status: 200
    })
}