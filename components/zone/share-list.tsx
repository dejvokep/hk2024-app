import ShareItem from "@/components/zone/share-item";

export default async function ShareList({trans, portfolio, prices}: {trans: any, portfolio: {[p: string]: number}, prices: {[p: string]: number}}) {
    return <div className="flex flex-col pt-2.5 mt-1 w-full text-sm whitespace-nowrap bg-black px-5">
        {Object.entries(portfolio).map(([s, v]) => <ShareItem key={s} trans={trans} code={s} amount={v} price={prices[s]}/>)}
    </div>
}