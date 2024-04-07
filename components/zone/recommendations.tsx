import useFetch from "@/lib/hooks/useFetch";
import {LoaderCircle} from "lucide-react";
import ShareList from "@/components/search/share-list";

export default function Recommendations() {
    const f = useFetch<Array<{code: string, name: string}>>("/api/recommendation")

    if (f.error) {
        return <div className={"text-muted text-center mt-4"}>
            <p>Results will appear here automatically.</p>
        </div>
    }

    if (f.loading || !f.data) {
        return <div className={"stroke-muted text-center mt-4 grid place-items-center"}>
            <LoaderCircle className={"h-12 w-12 animate-spin"} />
        </div>
    }

    if (f.error || f.data.length === 0) {
        return <div className={"text-muted text-center mt-4"}>
            <p>Results will appear here automatically.</p>
        </div>
    }

    return <div>
        <p className={"text-white text-sm font-bold"}>We recommend</p>
        <ShareList prices={f.data}/>
    </div>
}