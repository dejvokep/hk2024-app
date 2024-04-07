import PortfolioGraph from "@/components/zone/portfolio-graph";
import Controls from "@/components/zone/controls";
import ShareList from "@/components/zone/share-list";
import {getCurrentStockPrice} from "@/lib/api_nasdaq";
import {getHistory, getPortfolio, getTransactions, getUserInfo} from "@/lib/db_mongo";
import {redirect} from "next/navigation";
import Goal from "@/components/zone/goal";
import {getSession} from "@auth0/nextjs-auth0";
import {NextResponse} from "next/server";

export default async function Page() {
    const session = await getSession()
    if (!session)
        return new NextResponse(undefined, {status: 403})

    const info = await getUserInfo(session.user.sub.substring(6))

    if (!info.questionnaire)
        return redirect("/onboarding/tutorial/0")

    const trans = await getTransactions(session.user.sub.substring(6))
    const portfolio = await getPortfolio(session.user.sub.substring(6))

    const prices: {[p: string]: number} = {}
    for (const code of Object.keys(portfolio)) {
        prices[code] = await getCurrentStockPrice(code)
    }
    let sum = 0;
    for (const code of Object.keys(portfolio))
        sum += portfolio[code] * prices[code]

    const history = await getHistory(session.user.sub.substring(6))

    return <div>
        <div className="flex flex-col mx-auto w-full bg-black max-w-[480px] pb-[100px]">
            <Goal info={info} sum={sum}/>
            <PortfolioGraph portfolio={portfolio} prices={prices} sum={sum} history={history} />
            <ShareList trans={trans} portfolio={portfolio} prices={prices} />
            <Controls />
        </div>
    </div>
}