"use client";
import ShareItem from "@/components/search/share-item";

export default function ShareList({prices}: {prices: Array<{code: string, price: number}>}) {
    return <div className="flex flex-col pt-2.5 mt-1 w-full text-sm whitespace-nowrap bg-black space-y-2">
        {prices.map(e => <ShareItem key={e.code} code={e.code} price={e.price}/>)}
    </div>
}