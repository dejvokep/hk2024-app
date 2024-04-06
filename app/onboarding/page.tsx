import PortfolioGraph from "@/components/zone/portfolio-graph";
import Controls from "@/components/zone/controls";
import ShareItem from "@/components/zone/share-item";
import ShareList from "@/components/zone/share-list";
import {getDailyPortfolioValue} from "@/lib/api_nasdaq";
import {getUserInfo} from "@/lib/db_mongo";
import {redirect} from "next/navigation";

export default async function Page() {
    return <p>Onboarding...</p>
}