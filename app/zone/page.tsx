import PortfolioGraph from "@/components/zone/portfolio-graph";
import Controls from "@/components/zone/controls";
import ShareItem from "@/components/zone/share-item";
import ShareList from "@/components/zone/share-list";

export default async function Page() {
    return <div>
        <div className="flex flex-col pt-10 mx-auto w-full bg-black max-w-[480px]">
            <PortfolioGraph />
            <ShareList />
            <Controls />
        </div>
    </div>
}