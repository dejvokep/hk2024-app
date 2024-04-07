"use client";
import {useEffect, useState} from "react";
import {OnboardingData} from "@/lib/types";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Q1 from "@/components/onboarding/Q1";
import Q2 from "@/components/onboarding/Q2";
import Q3 from "@/components/onboarding/Q3";
import Q4 from "@/components/onboarding/Q4";
import Q5 from "@/components/onboarding/Q5";
import Q6 from "@/components/onboarding/Q6";
import Loading from "@/app/loading";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";
import Link from "next/link";

export default function Page() {
    const [api, setApi] = useState<CarouselApi>()
    const [data, setData] = useState<OnboardingData>({})
    const [current, setCurrent] = useState(0)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    function updateData(data: OnboardingData) {
        setData(prev => ({
            ...prev,
            ...data
        }))

        if (!api || api.selectedScrollSnap() === 4)
            return

        api.scrollNext()
    }

    useEffect(() => {
        if (!api)
            return
        setCurrent(api.selectedScrollSnap())

        api.on("scroll", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    function submit(o?: OnboardingData) {
        setLoading(true)

        fetch("/api/questionnaire", {
            method: "POST",
            body: JSON.stringify({
                interests: [],
                ...data,
                ...o
            })
        }).then(res => {
            router.push("/zone")
        })
    }

    if (loading) {
        return <Loading />
    }

    return <div className={"relative"}>
        {current !== 0 && <div className={"absolute top-[20px] left-[20px] z-10"} onClick={() => api?.scrollPrev()}>
            <p className={"text-muted"}>Back</p>
        </div>}
        {current === 0 && <div className={"absolute top-[20px] left-[20px] z-10"}>
            <Link href={"/zone"} className={"text-muted"}>Quit</Link>
        </div>}
        {current === 4 && <div className={"absolute top-[20px] right-[20px] z-10"} onClick={() => api?.scrollNext()}>
            <p className={"text-muted"}>Next</p>
        </div>}
        <Carousel setApi={setApi}>
            <CarouselContent>
            <CarouselItem>
                    <Q1 setter={updateData}/>
                </CarouselItem>
                <CarouselItem>
                    <Q2 setter={updateData}/>
                </CarouselItem>
                <CarouselItem>
                    <Q3 setter={updateData}/>
                </CarouselItem>
                <CarouselItem>
                    <Q4 setter={updateData}/>
                </CarouselItem>
                <CarouselItem>
                    <Q5 selected={data.interests ? data.interests : []} setter={updateData}/>
                </CarouselItem>
                <CarouselItem>
                    <Q6 submit={submit} setter={updateData}/>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
        <div className={"fixed bottom-0 left-0 w-full flex flex-row gap-x-1"}>
            {[0, 1, 2, 3, 4, 5].map(i => <div key={i} className={cn("h-[2px] grow", i <= current ? "bg-white" : "bg-muted")} style={{boxShadow: i <= current ? "0 0 4 0 #FFFFFF" : ""}}></div>)}
        </div>
    </div>
}