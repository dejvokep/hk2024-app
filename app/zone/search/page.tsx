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

    return <div>
        <Form {...form}>
            <form className="w-full">
                <FormField control={form.control} name="text" render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Search..." {...field}
                                   className={"focus-visible:ring-transparent"}/>
                        </FormControl>
                    </FormItem>
                )}/>
            </form>
        </Form>
        <SymbolFetcher form={form}/>
    </div>
}