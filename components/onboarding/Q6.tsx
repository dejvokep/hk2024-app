import {OnboardingData} from "@/lib/types";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

const schema = z.object({
    name: z.string().min(4).max(64),
    value: z.string()
})

export default function Q6({setter, submit}: {setter: (o: OnboardingData) => void, submit: (o?: OnboardingData) => void}) {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            value: ""
        },
    })

    function finish(values: z.infer<typeof schema>) {
        setter({
            goal: {
                name: values.name,
                value: +values.value
            }
        })
        submit({
            goal: {
                name: values.name,
                value: +values.value
            }
        })
    }
    function noGoal() {
        submit()
    }

    return <div className={"relative"}>
            <div className={"h-[224px] text-[24px] text-center w-[240px] mx-auto"}>
                <h1 className={"pt-[90px] leading-7"}>What specific goal would you like to achieve?</h1>
            </div>
            <div className={"w-full px-8"}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(finish)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className={"text-muted"}>What is it?</FormLabel>
                                    <FormControl>
                                        <Input placeholder="" {...field} className={"h-14 text-lg rounded-lg"} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="value"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className={"text-muted"}>How much does it cost?</FormLabel>
                                    <FormControl>
                                        <Input placeholder="1" {...field} className={"h-14 text-lg rounded-lg"} type={"number"} min={1} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className={"grid place-items-center"}>
                            <Button className={"min-w-[320px] py-7 mt-8"}>Finish</Button>
                        </div>
                    </form>
                </Form>
            </div>
            <div className={"text-center mt-6"} onClick={noGoal}>
                <p className={"text-muted"}>I don&apos;t have a goal in mind</p>
            </div>
        </div>
}