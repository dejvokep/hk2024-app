import {useMemo} from "react";

export default async function ShareItem({trans, code, amount, price}: {trans: Array<{symbol: string, amount: number, price: number}>, code: string, amount: number, price: number}) {
    const first = useMemo(() => {
        return trans.find(t => t.symbol === code)
    }, [code, trans])

    if (!first)
        return null

    const value = amount * price, original = amount * (first.price / first.amount)

    return <div className="flex justify-between p-5 w-full tracking-normal text-white bg-black rounded-xl shadow-sm" style={{boxShadow: "inset 0 2px 4px 0 rgba(255, 255, 255, 0.25), 0 -2px 10px 0 rgba(255, 255, 255, 0.1)"}}>
            <div className="font-bold my-auto">{code}</div>
            <div className={"my-auto"}>€{value.toFixed(2)}</div>
            <div className="my-auto text-xs tracking-normal text-secondary text-opacity-40">
                {value > original ? "+" : "-"}{Math.abs(value - original).toFixed(2)}
            </div>
            <div className="my-auto text-xs tracking-normal text-secondary text-opacity-40">
                ({value > original ? "+" : "-"}{(value > original ? (value * 100 / original)-100 : 100-(value * 100 / original)).toFixed(2)}%)
            </div>
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/305f32f0fffe7946c1cb7d91f315c94650c121f76a966a9335535513a7f02d55?"
            className="shrink-0 aspect-[1.67] stroke-[1px] stroke-white w-[63px]"
        />
    </div>
}