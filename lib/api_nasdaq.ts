import { getPortfolio, getTransactions } from "./db_mongo";

async function getDailyStockData(symbol: string, fromdate: string, todate: string): Promise<any> {
    // date format: yyyy-mm-dd
    const url = `https://api.nasdaq.com/api/quote/${symbol}/chart?assetclass=stocks&fromdate=${fromdate}&todate=${todate}&api_key=${process.env.NASDAQ_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    const chart = data.data.chart;
    let stockData = {}
    for (let i = 0; i < chart.length; i++) {
        chart[i].date = chart[i].date.substring(0, 10);
    }
    return data;
}

async function getDailyStockValue(_id: string, symbol: string, date: string): Promise<any> {
    
}

export async function getDailyPortfolioValue(): Promise<any> {}

async function getDailyPorfolioData()