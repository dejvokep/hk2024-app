import PortfolioGraph from "@/components/zone/portfolio-graph";
import Controls from "@/components/zone/controls";
import ShareItem from "@/components/zone/share-item";
import ShareList from "@/components/zone/share-list";
import {getDailyPortfolioValue} from "@/lib/api_nasdaq";

export default async function Page() {
    return <div>
        <div className="flex flex-col pt-10 mx-auto w-full bg-black max-w-[480px]">
            <PortfolioGraph graph={{}} />
            <ShareList />
            <Controls />
        </div>
    </div>
}