import {UseFormReturn, useWatch} from "react-hook-form";
import {z} from "zod";
import {useEffect, useState} from "react";
import ShareList from "@/components/search/share-list";
import {AreaChart, Flame, LoaderCircle} from "lucide-react";
import Recommendations from "@/components/zone/recommendations";
import {SEARCH_SCHEMA} from "@/lib/types";

export default function SymbolFetcher({form}: { form: UseFormReturn<z.infer<typeof SEARCH_SCHEMA>> }) {
    const [data, setData] = useState<{
        status: number,
        list: Array<{code: string, name: string}>
    }>({
        status: -1,
        list: []
    })
    const values = useWatch(form);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!values.text || values.text.length < 2)
                return

            setData({
                status: 0,
                list: []
            })

            fetch("/api/search/", {
                method: "POST",
                body: JSON.stringify({
                    text: values.text.substring(0, Math.min(8, values.text.length))
                })
            }).then(res => {
                if (!res.ok) {
                    setData({
                        status: res.status,
                        list: []
                    })
                    return null
                }

                return res.json()
            }).then(data => {
                if (!data || !Array.isArray(data))
                    return

                setData({
                    status: 200,
                    list: data
                })
            })
        }, 500)

        return () => clearTimeout(timeout);
    }, [values.text]);

    if (data.status === -1) {
        return <Recommendations />
    }

    if (data.status === 0) {
        return <div className={"stroke-muted text-center mt-4 grid place-items-center"}>
            <LoaderCircle className={"h-12 w-12 animate-spin"} />
        </div>
    }

    if (data.status !== 200) {
        return <div>
            <p>Error {data.status}!</p>
            <p>Try again later.</p>
        </div>
    }

    if (data.list.length === 0) {
        return <div className={"text-muted text-center mt-4"}>
            <p>Could not find any stocks.</p>
        </div>
    }

    if (data.list.length <= 3) {
        return <div>
            <p className={"text-white text-sm font-bold inline-flex justify-center"}><Flame className={"h-4 w-4 mr-2"} />Community trending</p>
            <ShareList prices={data.list}/>
        </div>
    }

    return <div>
        <p className={"text-white text-sm font-bold inline-flex justify-center"}><Flame className={"h-4 w-4 mr-2"}/>Community
            trending</p>
        <ShareList prices={data.list.slice(0, 3)}/>
        <p className={"text-white text-sm font-bold mt-6 inline-flex justify-center"}><AreaChart className={"h-4 w-4 mr-2"}/>Stocks & ETFs</p>
        <ShareList prices={data.list.slice(3)}/>
    </div>
}