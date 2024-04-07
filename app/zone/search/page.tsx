"use client";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import SymbolFetcher from "@/components/search/symbol-fetcher";
import {SEARCH_SCHEMA} from "@/lib/types";

export default function Page() {
    const form = useForm({
        resolver: zodResolver(SEARCH_SCHEMA),
        defaultValues: {
            text: ""
        }
    })

    return <div className={"px-5 pb-[20px]"}>
        <Form {...form}>
            <form className="w-full mb-4">
                <FormField control={form.control} name="text" render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Type at least 2 characters..." {...field}
                                   className={"ring-0 h-10 text-sm rounded-sm bg-card"}/>
                        </FormControl>
                    </FormItem>
                )}/>
            </form>
        </Form>
        <SymbolFetcher form={form}/>
    </div>
}