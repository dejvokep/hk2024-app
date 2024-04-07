"use client";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import SymbolFetcher from "@/components/search/symbol-fetcher";
import {Button} from "@/components/ui/button";
import useFetch from "@/lib/hooks/useFetch";
import {useState} from "react";
import AssistantResponse from "@/components/zone/assistant-response";
import {ASSISTANT_SCHEMA} from "@/lib/types";

// @ts-ignore


export default function Page() {
    const form = useForm({
        resolver: zodResolver(ASSISTANT_SCHEMA),
        defaultValues: {
            text: ""
        }
    })
    const [data, setData] = useState<{
        status: number,
        response?: string,
    }>({
        status: -1
    })

    function onSubmit(v: z.infer<typeof ASSISTANT_SCHEMA>) {
        if (v.text.trim().length < 8)
            return

        setData({
            status: 0
        })

        fetch("/api/assistant", {
            method: "POST",
            body: JSON.stringify(v)
        }).then(res => res.text()).then(j => {
            setData({
                status: 200,
                response: j.toString()
            })
        })
    }

    return <div className={"px-5 pb-[20px]"}>
        <Form {...form}>
            <form className="w-full mb-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} name="text" render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="What can I help with?" {...field}
                                   className={"ring-0 h-10 text-sm rounded-sm bg-card"}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <Button className={"mt-4"}>Send</Button>
            </form>
        </Form>
        <AssistantResponse data={data}/>
    </div>
}