import Link from "next/link";
import MenuItem from "@/components/menu/MenuItem";

export default function Menu() {
    return <header className={"w-full fixed left-0 bottom-0 bg-opacity-95 p-3 flex justify-between align-middle bg-card border-b border-b-secondary z-10"}>
        <div className={"flex w-full flex-row justify-around"}>
            <MenuItem link={"/"} label={"Home"}/>
            <MenuItem link={"/about"} label={"About"}/>
            <MenuItem link={"/profile"} label={"Profile"}/>
            <MenuItem link={"/api/auth/logout"} label={"Logout"}/>
        </div>
    </header>
}