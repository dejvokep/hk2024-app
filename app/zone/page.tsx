import PortfolioGraph from "@/components/zone/portfolio-graph";
import Controls from "@/components/zone/controls";
import ShareItem from "@/components/zone/share-item";
import ShareList from "@/components/zone/share-list";
import {getDailyPortfolioValue} from "@/lib/api_nasdaq";
import {getUserInfo} from "@/lib/db_mongo";
import {redirect} from "next/navigation";

export default async function Page() {
    const info = await getUserInfo("66116391ee779e1b4fd68379")

    if (!info.questionnaire)
        return redirect("/onboarding")

    return <div>
        <div className="flex flex-col pt-10 mx-auto w-full bg-black max-w-[480px]">
            <PortfolioGraph graph={{}} />
            <ShareList />
            <Controls />
        </div>
    </div>
}