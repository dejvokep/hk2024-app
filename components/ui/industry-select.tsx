import {cn} from "@/lib/utils";
import {Industries} from "@/lib/types";

export default function IndustrySelect({selected, toggle, selections}: {selected: Array<Industries>, toggle: (v: Industries) => void, selections: {[key in Industries]: {label: string}}}) {
    return <div className="flex gap-2.5 flex-wrap justify-center">
        {Object.keys(selections).map(k => <div key={k} className={cn("justify-center px-[15px] py-[10px] bg-black rounded-xl border", selected.includes(k as Industries) ? "text-black bg-white border-white" : "bg-black border-[#2D2D2D]")} onClick={() => toggle(k as Industries)}><p>{selections[k as Industries].label}</p></div>)}
    </div>
}