"use client";

import {useState} from "react";
import {TIME_SPANS} from "@/lib/types";
import ExpandedSelect from "@/components/ui/expanded-select";
import Graph from "@/components/graph/graph";
import {cn} from "@/lib/utils";
import {ArrowDown, ArrowUp, LoaderCircle, XCircle} from "lucide-react";
import useFetch from "@/lib/hooks/useFetch";

export default function StockGraph({sum,code}: {sum: number,code:string}) {
    const [span, setSpan] = useState<keyof typeof TIME_SPANS>("1W")
    const f = useFetch<{[k: string]: number}>("/api/stock/daily", {
        method: "POST",
        body: JSON.stringify({
            code,
            from: getDate(TIME_SPANS[span].last),
            to: getDate(0)
        })
    })

    function getDate(sub: number) {
        const d = new Date()
        d.setDate(d.getDate() - sub)
        const s = d.toISOString()
        return s.substring(0, s.indexOf("T"))
    }

    if (f.loading || !f.data) {
        return <div>
            <div className={"h-[370px] w-full grid place-items-center"}>
                <LoaderCircle className={"h-16 w-16 animate-spin"} />
            </div>
            <ExpandedSelect selected={span} setSelected={setSpan} selections={TIME_SPANS}/>
        </div>
    }

    if (Object.keys(f.data).length === 0) {
        return <div>
            <div className={"h-[370px] w-full grid place-items-center"}>
                <div className={"space-y-2"}>
                <XCircle className={"h-16 w-16"} />
                <p className={"text-muted text-center"}>No data.</p>
                </div>
            </div>
            <ExpandedSelect selected={span} setSelected={setSpan} selections={TIME_SPANS}/>
        </div>
    }

    let start: string = "9999-99-99"
    Object.keys(f.data).forEach(d => {
        if (d < start)
            start = d
    })

    const init = f.data[start]

    return <div>
        <div className="flex flex-col items-start w-full">
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
        <div className={"grid place-items-center"}>
            <Graph v={f.data} className={cn("h-[300px] w-[300px]", sum >= init ? "stroke-secondary" : "stroke-destructive")} wi={"0.5px"}/>
        </div>
        <ExpandedSelect selected={span} setSelected={setSpan} selections={TIME_SPANS}/>
    </div>
}