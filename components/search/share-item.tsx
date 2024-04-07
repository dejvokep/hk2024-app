"use client";

import Graph from "@/components/graph/graph";
import {cn} from "@/lib/utils";
import useFetch from "@/lib/hooks/useFetch";

export default function ShareItem({code, price}: {price: number, code: string}) {
    const f = useFetch<{[key: string]: number}>("/api/stock/daily", {
        method: "POST",
        body: JSON.stringify({
            code,
            from: getDate(7),
            to: getDate(0)
        })
    })

    function getDate(sub: number) {
        const d = new Date()
        d.setDate(d.getDate() - sub)
        const s = d.toISOString()
        return s.substring(0, s.indexOf("T"))
    }

    if (f.loading) {
        return <div className="flex justify-between p-5 w-full tracking-normal text-white bg-black rounded-xl shadow-sm" style={{boxShadow: "inset 0 2px 4px 0 rgba(255, 255, 255, 0.25), 0 -2px 10px 0 rgba(255, 255, 255, 0.1)"}}>
            <div className="font-bold my-auto">{code}</div>
            <div className={"my-auto"}>€{price.toFixed(2)}</div>
        </div>
    }

    if (f.error || !f.data) {
        return <div className="flex justify-between p-5 w-full tracking-normal text-white bg-black rounded-xl shadow-sm"
                    style={{boxShadow: "inset 0 2px 4px 0 rgba(255, 255, 255, 0.25), 0 -2px 10px 0 rgba(255, 255, 255, 0.1)"}}>
            <div className="font-bold my-auto">{code}</div>
            <div className={"my-auto"}>€{price.toFixed(2)}</div>
        </div>
    }

    const value = price
    let origDate = "9999-99-99"

    for (const k of Object.keys(f.data)) {
        if (k < origDate)
            origDate = k
    }
    const original = f.data[origDate]

    return <div className="flex justify-between p-5 w-full tracking-normal text-white bg-black rounded-xl shadow-sm"
                style={{boxShadow: "inset 0 2px 4px 0 rgba(255, 255, 255, 0.25), 0 -2px 10px 0 rgba(255, 255, 255, 0.1)"}}>
            <div className="font-bold my-auto">{code}</div>
            <div className={"my-auto"}>€{value.toFixed(2)}</div>
            <div className={cn("my-auto text-xs tracking-normal text-opacity-40", value >= original ? "text-secondary" : "stroke-destructive")}>
                {value >= original ? "+" : "-"}{Math.abs(value - original).toFixed(2)}
            </div>
            <div className={cn("my-auto text-xs tracking-normal text-opacity-40", value >= original ? "text-secondary" : "stroke-destructive")}>
                ({value >= original ? "+" : "-"}{(value >= original ? (value * 100 / original)-100 : 100-(value * 100 / original)).toFixed(2)}%)
            </div>
        <Graph v={f.data} className={cn("h-8 w-16", value >= original ? "stroke-secondary" : "stroke-destructive")}/>
    </div>
}