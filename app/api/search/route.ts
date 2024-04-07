import {NextRequest, NextResponse} from "next/server";
import {updateQuestionnaire} from "@/lib/db_mongo";
import sql from "@/lib/db";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const text = (await req.json()).text.trim().toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").split()[0]

    const res = await sql("SELECT symbol,last_sale FROM nasdaq WHERE symbol LIKE $1 ORDER BY symbol ASC LIMIT 10", [`%${text}%`])
    const rows = res.rows.map(r => ({
        code: r.symbol,
        price: r.last_sale
    }))

    return new NextResponse(JSON.stringify(rows), {
        status: 200
    })
}