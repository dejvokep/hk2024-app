import {getInfo} from "@/lib/db";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";
import StockGraph from "@/components/zone/stock-graph";
import {getNewsBySymbol} from "@/lib/db_neon";
import News from "@/components/zone/news";
import ConfettiButton from "@/components/zone/confetti-button";

export default async function Page({ params }: { params: { code: string } }) {
    const info = await getInfo(params.code)
    const name = info.name
    const news = await getNewsBySymbol(params.code);

    return <div className={"px-[20px] relative pb-[40px]"}>
        <div className={"grid place-items-center"}>
            <p className={"text-white text-ellipsis"}>{name.substring(0, Math.min(12, name.length))}{name.length > 12 && "..."}</p>
            <p className={"text-xs text-muted"}>{info.code} - STOCK - US</p>
        </div>
        <div className={"absolute top-0"}>
            <Link href={"/search"}><ChevronLeft className={"h-8"}/></Link>
        </div>
        <div className={"pt-16"}>
            <StockGraph sum={info.price} code={params.code}/>
        </div>
        <div>
            <ConfettiButton/>
        </div>
        <div className={"pt-4"}>
            <News news={news}/>
        </div>
    </div>
}