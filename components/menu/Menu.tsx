"use client"

import MenuItem from "@/components/menu/MenuItem";
import {AreaChart, ArrowRightLeft, Newspaper, Search, UsersRound} from "lucide-react";

export default function Menu() {
    return <header className={"fixed left-0 bottom-0 p-5 flex w-full flex-row justify-between bg-black"}>
        <MenuItem link={"/zone"} label={"Portfolio"} icon={c => <AreaChart className={c}/>}/>
        <MenuItem link={"/"} label={"Search"} icon={c => <Search className={c}/>}/>
        <MenuItem link={"/zone/exchange"} label={"Exchange"} icon={c => <ArrowRightLeft className={c}/>}/>
        <MenuItem link={"/api/auth/logout"} label={"News"} icon={c=> <Newspaper className={c}/>}/>
        <MenuItem link={"/zone/community"} label={"Community"} icon={c => <UsersRound className={c}/>}/>
    </header>
}