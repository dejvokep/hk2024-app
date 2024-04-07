import {useMemo} from "react";
import {getCurrentStockPrice, getDailyStockData} from "@/lib/api_nasdaq";
import Graph from "@/components/graph/graph";
import {cn} from "@/lib/utils";
import Link from "next/link";

export default async function ShareItem({trans, code, amount, price}: {price: number, trans: Array<{symbol: string, amount: number, price: number}>, code: string, amount: number}) {
    const first = useMemo(() => {
        return trans.find(t => t.symbol === code) || {price: price*amount, amount: amount}
    }, [code, trans])

    function getDate(sub: number) {
        const d = new Date()
        d.setDate(d.getDate() - sub)
        const s = d.toISOString()
        return s.substring(0, s.indexOf("T"))
    }

    const graph = await getDailyStockData(code, getDate(7), getDate(0))

    const value = amount * price, original = amount * (first.price / first.amount)

    return <Link href={"/zone/exchange/" + code}><div className="flex justify-between p-5 w-full tracking-normal text-white bg-black rounded-xl shadow-sm" style={{boxShadow: "inset 0 2px 4px 0 rgba(255, 255, 255, 0.25), 0 -2px 10px 0 rgba(255, 255, 255, 0.1)"}}>
            <div className="font-bold my-auto">{code}</div>
            <div className={"my-auto"}>€{value.toFixed(2)}</div>
            <div className={cn("my-auto text-xs tracking-normal text-opacity-40", value >= original ? "text-secondary" : "stroke-destructive")}>
                {value >= original ? "+" : "-"}{Math.abs(value - original).toFixed(2)}
            </div>
            <div className={cn("my-auto text-xs tracking-normal text-opacity-40", value >= original ? "text-secondary" : "stroke-destructive")}>
                ({value >= original ? "+" : "-"}{(value >= original ? (value * 100 / original)-100 : 100-(value * 100 / original)).toFixed(2)}%)
            </div>
        <Graph v={graph} className={cn("h-8 w-16", value >= original ? "stroke-secondary" : "stroke-destructive")}/>
    </div></Link>
}