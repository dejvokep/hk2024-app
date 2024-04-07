"use client";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import SymbolFetcher from "@/components/search/symbol-fetcher";

export const SCHEMA = z.object({
    text: z.string().min(2).max(8)
})

export default function Page() {
    const form = useForm({
        resolver: zodResolver(SCHEMA),
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
                                   className={"focus-visible:ring-transparent h-14 text-lg rounded-lg ring-muted"}/>
                        </FormControl>
                    </FormItem>
                )}/>
            </form>
        </Form>
        <SymbolFetcher form={form}/>
    </div>
}