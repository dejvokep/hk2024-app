import {cn} from "@/lib/utils";

export default function Graph({v, className}: {v: {[key: string]: number}, className: string}) {
    const vals = Object.entries(v).sort((a,b) => a[0].localeCompare(b[0])).map(x => x[1]),
        min = Math.min.apply(null, vals), max = Math.max.apply(null, vals)

    function getY(p: number) {
        const spectrum = max-min
        const diff = p-min

        return diff * h / spectrum
    }

    const w = 64, h = 32

    return <div className={cn(className, "relative")}>
        <svg className={className} viewBox={`0 0 ${w} ${h}`}>
            {vals.map((p, i) => {
                if (i+1 === vals.length)
                    return null

                return <line key={i} x1={i * w / (vals.length-1)} y1={getY(p)} x2={(i+1) * w / (vals.length-1)} y2={getY(vals[i+1])}/>
            })}
        </svg>
        <div className={cn(className, "absolute top-0 left-0 bg-gradient-to-r from-[#000000FF] to-[#FFFFFF00]")}>
        </div>
    </div>
}