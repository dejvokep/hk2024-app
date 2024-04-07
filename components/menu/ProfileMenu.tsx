"use client";
import MenuItem from "@/components/menu/MenuItem";
import {AreaChart, ArrowRightLeft, Bot, Newspaper, Search, UsersRound} from "lucide-react";
import {getSession} from "@auth0/nextjs-auth0";
import {useUser} from "@auth0/nextjs-auth0/client";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

export default function ProfileMenu() {
    const session = useUser()
    const pathname = usePathname()

    if (pathname === "/zone/settings")
        return null

    return <header className={"fixed left-0 top-0 p-5 flex w-full flex-row justify-between bg-black z-50"}>
        <MenuItem link={"/zone/settings"} icon={c => <img alt={"profile"} src={session?.user?.picture || ""} className={cn(c, "rounded")}/>}/>
        <MenuItem link={"/zone/assistant"} icon={c => <Bot className={c}/>}/>
    </header>
}