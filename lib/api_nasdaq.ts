import { getPortfolio, getTransactions } from "./db_mongo";

export async function getCurrentStockPrice(symbol: string): Promise<number> {
    const modifiedSymbol = symbol.replace(/-/g, '^');

    const url = `https://api.nasdaq.com/api/quote/${modifiedSymbol}/info?assetclass=stocks&api_key=${process.env.NASDAQ_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.primaryData.lastSalePrice.substring(1);
}

export async function getDailyStockData(symbol: string, fromdate: string, todate: string): Promise<any> {
    const modifiedSymbol = symbol.replace(/-/g, '^');

    const date1 = new Date(fromdate);
    const date2 = new Date(todate);
    const dayDifference = Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);

    if (dayDifference <= 1){
        const price = await getCurrentStockPrice(modifiedSymbol);
        let stockData: { [key: string]: number } = {}
        stockData[fromdate] = price;
        stockData[todate] = price;
        return stockData;
    }

    // date format: yyyy-mm-dd-dd
    const url = `https://api.nasdaq.com/api/quote/${modifiedSymbol}/chart?assetclass=stocks&fromdate=${fromdate}&todate=${todate}&api_key=${process.env.NASDAQ_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    const chart = data.data.chart;

    if (!chart)
        return []

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
    const fromdate = shiftDate(todate, -days);

    const portfolioBacktrack: { [key: string]: {[key: string]: number} } = {};
    for (const key in portfolio){
        portfolioBacktrack[key] = {};
        for (let d = 0; d < days; d++)
                portfolioBacktrack[key][convertDateToString(shiftDate(todate, d))] = portfolio.amount;
    }

    let currentDate = todate;
    for (let i = transactions.length - 1; i >= 0 ; i--) {
        const symbol = transactions[i].symbol;
        const price = transactions[i].price;
        const amount = transactions[i].amount;
        const date = new Date(transactions[i].date);
        
        portfolioBacktrack[transactions.symbol]
        if (date <= currentDate) {
            portfolioBacktrack[symbol][convertDateToString(date)] = amount;
        }
        else if (date < fromdate)
            break;
        else {}
    } 

    

    let portfolioValue = 0;
    //for (const [symbol, quantity] of portfolio) {
        //const stockData = await getDailyStockValue(_id, symbol, date, );
        //portfolioValue += stockData[symbol] * quantity;
    //}
    return portfolioValue;
}

export async function getCurrentPortfolioValue(_id: string): Promise<number> {
    const portfolio = await getPortfolio(_id);
    let portfolioValue = 0;
    for (const symbol in portfolio) {
        const stockPrice = await getCurrentStockPrice(symbol);
        portfolioValue += stockPrice * portfolio[symbol];
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

function shiftDate(inputDate: Date, days: number): Date {
    const date = new Date(inputDate);
    date.setDate(date.getDate() + days);
    return date;
}