"use client";
import ShareItem from "@/components/search/share-item";

export default function ShareList({prices}: {prices: Array<{code: string, name: string}>}) {
    return <div className="flex flex-col pt-2.5 mt-1 w-full text-sm whitespace-nowrap bg-black space-y-4">
        {prices.map(e => <ShareItem key={e.code} code={e.code} name={e.name}/>)}
    </div>
}