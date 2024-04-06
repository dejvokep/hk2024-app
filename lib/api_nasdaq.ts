import { getPortfolio, getTransactions } from "./db_mongo";

export async function getCurrentStockPrice(symbol: string): Promise<number> {
    const url = `https://api.nasdaq.com/api/quote/${symbol}/info?assetclass=stocks`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.primaryData.lastSalePrice.substring(1);
}

export async function getDailyStockData(symbol: string, fromdate: string, todate: string): Promise<any> {
    // date format: yyyy-mm-dd
    const url = `https://api.nasdaq.com/api/quote/${symbol}/chart?assetclass=stocks&fromdate=${fromdate}&todate=${todate}&api_key=${process.env.NASDAQ_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    const chart = data.data.chart;

    let stockData: { [key: string]: number } = {}; // Explicitly define the type of stockData

    for (let i = 0; i < chart.length; i++) {
        stockData[convertDateFormat(chart[i].z.dateTime)] = chart[i].y;
    }
    return stockData;
}

async function getDailyStockValue(_id: string, symbol: string, days: number = 30, ): Promise<any> {}

export async function getDailyPortfolioValue(_id: string, days: number = 30): Promise<any> {
    const portfolio = await getPortfolio(_id);
    const transactions = await getTransactions(_id);
    const todate = new Date();
    const fromdate = new Date();
    fromdate.setDate(todate.getDate() - 30);

    const portfolioBacktrack: { [key: string]: {[key: string]: number} } = {};
    for (let i = 0; i < portfolio.length; i++) {
        portfolioBacktrack[portfolio.symbol] = {[convertDateToString(todate)] : portfolio.amount};
    }

    for (let i = 0; i < portfolio.length; i++) {
        const symbol = portfolio[i].symbol;
        const price = portfolio[i].price;
        const amount = portfolio[i].amount;
        const date = portfolio[i].date;
        

    } 

    let portfolioValue = 0;
    for (const [symbol, quantity] of portfolio) {
        //const stockData = await getDailyStockValue(_id, symbol, date, );
        //portfolioValue += stockData[symbol] * quantity;
    }
    return portfolioValue;
}

async function getDailyPorfolioData(): Promise<any> {}

function convertDateFormat(inputDate: string): string {
    const [month, day, year] = inputDate.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

function convertDateToString(inputDate: Date): string {
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const day = inputDate.getDate().toString().padStart(2, '0');
    return `${inputDate.getFullYear()}-${month}-${day}`;
}