/*
import {Pool, QueryResult} from 'pg'

const pool = new Pool({
    host: process.env.PG_HOST,
    port: +(process.env.PG_PORT || 5432),
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
})

export function query(text: string, params?: any[], callback?: any): Promise<QueryResult> {
    // @ts-ignore
    return pool.query(text, params || [], callback)
}
*/

import {neon} from "@neondatabase/serverless";

const sql = neon(process.env.NEON_DB || "", {fullResults: true})
export default sql

export async function getInfo(code: string): Promise<{code: string, name: string, price: number}> {
    const res = await sql("SELECT symbol,last_sale,name FROM nasdaq WHERE symbol = $1", [code])
    const rows = res.rows.map(r => ({
        code: r.symbol,
        price: r.last_sale,
        name: r.name
    }))

    return rows[0]
}