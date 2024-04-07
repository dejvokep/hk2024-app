"use client";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";

export default function News({news}:{news: Array<{title: string, publishing_date: string}>}) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api)
            return
        setCurrent(api.selectedScrollSnap())

        api.on("scroll", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    if (!news)
        return null

    return <div><Carousel setApi={setApi}>
        <CarouselContent>
            {news.map(n => <CarouselItem key={n.publishing_date}>
                <p className={"text-justify"}>{n.title}</p>
                <p className={"text-muted text-right"}> {new Date(n.publishing_date).toDateString()}</p>
            </CarouselItem>)}
        </CarouselContent>
    </Carousel>
        <div className={"grid place-items-center"}>
            <div className={"flex space-x-2"}>
                {news.map((_, i) => <div key={i} className={cn("h-1 w-1 rounded", i === current ? "bg-white" : "bg-muted")}></div>)}
            </div>
        </div>
    </div>
}