import Link from "next/link";
import React from "react";
import {cn} from "@/lib/utils";
import {usePathname, useRouter} from "next/navigation";

export default function MenuItem({link, label, icon}: { link: string, label: string, icon: (className: string) => React.ReactNode }) {
    const pathname = usePathname()

    return <Link href={link}>
        <div className={""}>
            <div className={"grid place-items-center"}>{icon(cn("h-[20px] w-[20px] stroke-[2px]", pathname === link ? "stroke-white" : "stroke-muted"))}</div>
            <h1 className={cn("text-center text-[13px] -translate-y-0.5", pathname === link ? "text-white" : "text-muted")}>{label}</h1>
        </div>
    </Link>
}