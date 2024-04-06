import ShareItem from "@/components/zone/share-item";

export default async function ShareList() {
    const trans = [{symbol: "NVDA", amount: 100, price: 176016}]
    const portfolio = {
        "NVDA": 100
    }
    const prices = {
        "NVDA": 880
    }

    return <div className="flex flex-col pt-2.5 mt-1 w-full text-sm whitespace-nowrap bg-black px-5">
        {Object.entries(portfolio).map(([s, v]) => <ShareItem key={s} trans={trans} code={s} amount={v} price={prices[s] || 0}/>)}
    </div>
}