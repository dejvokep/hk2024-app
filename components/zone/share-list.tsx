import ShareItem from "@/components/zone/share-item";
import {getPortfolio, getTransactions} from "@/lib/db_mongo";

export default async function ShareList() {
    const trans = await getTransactions("66116391ee779e1b4fd68379")
    const portfolio = await getPortfolio("66116391ee779e1b4fd68379")

    return <div className="flex flex-col pt-2.5 mt-1 w-full text-sm whitespace-nowrap bg-black px-5">
        {Object.entries(portfolio).map(([s, v]) => <ShareItem key={s} trans={trans} code={s} amount={v}/>)}
    </div>
}