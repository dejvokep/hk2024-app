import {Pool, QueryResult} from 'pg'
import { list } from 'postcss';
import sql from "@/lib/db";
import {Industries, IndustryMappers} from "@/lib/types";

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
    const results = await sql(`SELECT * FROM news ORDER BY id ASC LIMIT ${results_per_page} OFFSET ${(page - 1) * results_per_page}`);
    const news_arr = [];
    for (const row of results.rows) {
        news_arr.push(row);
    }
    return news_arr;
}

export async function getNewsBySymbol(symbol: string, page: number = 1, results_per_page: number = 10): Promise<Array<{title: string, publishing_date: string}>> {
    const results = await sql(`SELECT * FROM news WHERE stock = '${symbol}' ORDER BY id ASC LIMIT ${results_per_page} OFFSET ${(page - 1) * results_per_page}`);
    const news_arr = [];
    for (const row of results.rows) {
        news_arr.push(row);
    }
    // @ts-ignore
    return news_arr;
}

export async function getRecomendations(intrests:Array<Industries>,risk:any,length:any,ammount:any) {
    let ai_weight = 1
    let popularity_weight = 1
    if (risk == "LOW"){
        ai_weight += 0.2
    }else if (risk == "HIGH"){
        popularity_weight += 0.2
    }
    if (length == "SHORT"){
        ai_weight += 0.2
    }else if (length == "LONG"){
        popularity_weight += 0.2
    }

    intrests.push("HEALTHCARE")

    const result = await sql(`SELECT symbol AS code,name, CASE WHEN sector IN (${intrests.map(i => `'${IndustryMappers[i as Industries]}'`).join(",")}) THEN (ai_rating * ${ai_weight} + popularity_rating * ${popularity_weight}) * 1.3 ELSE (ai_rating * ${ai_weight} + popularity_rating * ${popularity_weight}) END AS recommendation FROM nasdaq WHERE ai_rating IS NOT NULL ORDER BY recommendation DESC LIMIT ${ammount};`)
    return result.rows
    
}
