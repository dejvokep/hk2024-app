import {Pool, QueryResult} from 'pg'

const pool = new Pool({
    host: process.env.PG_HOST,
    port: +(process.env.PG_PORT || 5432),
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD
})
function query(text: string, params?: any[], callback?: any): Promise<QueryResult> {
    // @ts-ignore
    return pool.query(text, params || [], callback)
}

export async function getGeneralNews(page: number = 1, results_per_page: number = 10): Promise<any> {
    const results = await query(`SELECT * FROM news ORDER BY id ASC LIMIT ${results_per_page} OFFSET ${(page - 1) * results_per_page}`);
    const news_arr = [];
    for (const row of results.rows) {
        news_arr.push(row);
    }
    return news_arr;
}

export async function getNewsBySymbol(symbol: string, page: number = 1, results_per_page: number = 10): Promise<any> {
    const results = await query(`SELECT * FROM news WHERE stock = '${symbol}' ORDER BY id ASC LIMIT ${results_per_page} OFFSET ${(page - 1) * results_per_page}`);
    const news_arr = [];
    for (const row of results.rows) {
        news_arr.push(row);
    }
    return news_arr;
}
