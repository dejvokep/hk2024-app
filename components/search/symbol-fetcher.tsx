import {UseFormReturn, useWatch} from "react-hook-form";
import {z} from "zod";
import {SCHEMA} from "@/app/zone/search/page";
import {useEffect, useState} from "react";

export default function SymbolFetcher({form}: { form: UseFormReturn<z.infer<typeof SCHEMA>> }) {
    const [data, setData] = useState<{
        status: number,
        list: Array<{code: string, price: number}>
    }>({
        status: -1,
        list: []
    })
    const values = useWatch(form);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!values.text)
                return

            setData({
                status: 0,
                list: []
            })

            fetch("/api/search/", {
                method: "POST",
                body: JSON.stringify({
                    text: values.text
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
        return <div>
            <p>Results will appear here.</p>
        </div>
    }

    if (data.status === 0) {
        return <div>
            <p>Loading...</p>
        </div>
    }

    if (data.status !== 200) {
        return <div>
            <p>Error {data.status}!</p>
            <p>Try again later.</p>
        </div>
    }

    return <div>
        {data.list.map(e => <p key={e.code}>{e.code}</p>)}
    </div>
}