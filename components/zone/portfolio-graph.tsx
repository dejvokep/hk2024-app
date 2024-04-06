"use client";

import {useState} from "react";
import {TIME_SPANS} from "@/lib/types";
import ExpandedSelect from "@/components/ui/expanded-select";

export default function PortfolioGraph({graph}: {graph: object}) {
    const [span, setSpan] = useState<keyof typeof TIME_SPANS>("1D")

    return <div>
        <div className="flex flex-col items-start pl-10 w-full">
            <div className="text-4xl font-bold tracking-tight leading-9 text-white">
                12 923,62€
            </div>
            <div className="flex gap-2.5 items-start pt-2.5 text-sm tracking-normal text-neutral-400">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5230564c823ede35a90419159011351c2e47a2efc89ce19260eb85401175125?"
                    className="shrink-0 w-3 aspect-[1.2] fill-green-500 fill-opacity-40"
                />
                <div>3,35%</div>
                <div>(432.94€)</div>
                <div className="self-stretch">{TIME_SPANS[span].label}</div>
            </div>
        </div>
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/69c8087248ab7085021e3a562e5254fb14a974dd691b8a8c6e305b5fcc617d4b?"
            className="self-start mt-1 w-full aspect-[1.23] stroke-[1.5px] stroke-white"
        />
        <ExpandedSelect selected={span} setSelected={setSpan} selections={TIME_SPANS}/>
    </div>
}