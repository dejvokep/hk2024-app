import {NextRequest, NextResponse} from "next/server";
import {getDailyStockData} from "@/lib/api_nasdaq";

export async function POST(res: NextRequest): Promise<NextResponse> {
    const body = await res.json()

    return new NextResponse(await getDailyStockData(body.symbol, body.from, body.to), {
        status: 200
    })
}