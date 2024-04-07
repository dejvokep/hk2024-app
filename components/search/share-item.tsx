"use client";

import Graph from "@/components/graph/graph";
import {cn} from "@/lib/utils";
import useFetch from "@/lib/hooks/useFetch";
import {PlusCircle} from "lucide-react";

export default function ShareItem({code, price, name}: { price: number, code: string, name: string }) {
    /*const f = useFetch<{[key: string]: number}>("/api/stock/daily", {
        method: "POST",
        body: JSON.stringify({
            code,
            from: getDate(7),
            to: getDate(0)
        })
    })*/

    return <div className="flex justify-between w-full tracking-normal bg-black rounded-xl shadow-sm">
        <div className={"max-w-[50vw]"}>
            <p className={"text-white text-ellipsis"}>{name.substring(0, Math.min(40, name.length))}{name.length > 20 && "..."}</p>
            <p className="text-sm text-muted">{code}</p>
        </div>
        <div className={"grid place-items-center"}>
            <PlusCircle className={"stroke-secondary"} />
        </div>
    </div>
}