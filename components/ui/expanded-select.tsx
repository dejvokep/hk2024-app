import {cn} from "@/lib/utils";

export default function ExpandedSelect<T extends {[key: string]: {label: string}}>({selected, setSelected, selections}: {selected: keyof T, setSelected: (v: keyof T) => void, selections: T}) {
    return <div className="flex gap-2.5 justify-between mx-auto py-1.5 mt-1 text-sm tracking-normal text-white whitespace-nowrap bg-black">
        {Object.keys(selections).map(k => <div key={k} className={cn("justify-center px-5 py-2.5 bg-black rounded-md", selected === k ? "text-black bg-white" : "bg-black")} style={{boxShadow: selected === k ? "inset 0 0 10px 0 rgba(0, 0, 0, 0.51)" : ""}} onClick={() => setSelected(k)}><p>{k}</p></div>)}
    </div>
}