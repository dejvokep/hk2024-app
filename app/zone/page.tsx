import PortfolioGraph from "@/components/zone/portfolio-graph";
import Controls from "@/components/zone/controls";
import ShareItem from "@/components/zone/share-item";
import ShareList from "@/components/zone/share-list";
import {getCurrentStockPrice, getDailyPortfolioValue} from "@/lib/api_nasdaq";
import {getPortfolio, getTransactions, getUserInfo} from "@/lib/db_mongo";
import {redirect} from "next/navigation";

export default async function Page() {
    const info = await getUserInfo("66116391ee779e1b4fd68379")

    if (!info.questionnaire)
        return redirect("/onboarding")

    const trans = await getTransactions("66116391ee779e1b4fd68379")
    const portfolio = await getPortfolio("66116391ee779e1b4fd68379")

    const prices: {[p: string]: number} = {}
    for (const code of Object.keys(portfolio)) {
        prices[code] = await getCurrentStockPrice(code)
    }

    return <div>
        <div className="flex flex-col pt-10 mx-auto w-full bg-black max-w-[480px] pb-[100px]">
            <PortfolioGraph portfolio={portfolio} prices={prices} />
            <ShareList trans={trans} portfolio={portfolio} prices={prices} />
            <Controls />
        </div>
    </div>
}