"use client";

import {useState} from "react";
import {TIME_SPANS} from "@/lib/types";
import ExpandedSelect from "@/components/ui/expanded-select";
import Graph from "@/components/graph/graph";
import {cn} from "@/lib/utils";
import {ArrowDown, ArrowUp} from "lucide-react";

export default function PortfolioGraph({portfolio, prices, sum, history}: {sum: number, portfolio: {[k: string]: number}, prices: {[k: string]: number}, history: Array<{date: string, value: number}>}) {
    const [span, setSpan] = useState<keyof typeof TIME_SPANS>("1D")

    const now = new Date();
    TIME_SPANS[span].mod(now)
    let iso = now.toISOString()
    iso = iso.substring(0, iso.indexOf("T") || undefined)

    let start: string = "9999-99-99"
    const data = Object.fromEntries(history.filter(e => {
        if (e.date < start && e.date >= iso)
            start = e.date
        return e.date >= iso
    }).map(e => [e.date, e.value]))

    const init = data[start]

    return <div>
        <div className="flex flex-col items-start pl-10 w-full">
            <div className="text-4xl font-bold tracking-tight leading-9 text-white">
                {sum.toFixed(2)}€
            </div>
            <div className="flex gap-2.5 items-start pt-2.5 text-sm tracking-normal text-neutral-400">
                <div className={"grid place-items-center"}>{sum >= init ? <ArrowUp className={"h-4 stroke-secondary"} /> : <ArrowDown className={"h-4 stroke-destructive"} />}</div>
                <div>{sum > init ? "+" : "-"}{(sum >= init ? (sum * 100 / init)-100 : 100-(sum * 100 / init)).toFixed(2)}%</div>
                <div>({sum >= init ? "+" : "-"}{Math.abs(sum - init).toFixed(2)}€)</div>
                <div className="self-stretch">{TIME_SPANS[span].label}</div>
            </div>
        </div>
        <div className={"pl-10"}>
            <Graph v={data} className={cn("h-[300px] w-[300px]", sum >= init ? "stroke-secondary" : "stroke-destructive")} wi={"0.5px"}/>
        </div>
        <div className={"px-5"}>
            <ExpandedSelect selected={span} setSelected={setSpan} selections={TIME_SPANS}/>
        </div>
    </div>
}