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