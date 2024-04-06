import Link from "next/link";
import MenuItem from "@/components/menu/MenuItem";

export default function Menu() {
    return <header className={"w-full fixed top-0 bg-opacity-95 p-3 px-32 flex justify-between align-middle bg-card border-b border-b-secondary z-10"}>
        <div>
            <h1><Link href={"/"}>HK2024</Link></h1>
        </div>
        <div className={"flex space-x-12"}>
            <MenuItem link={"/"} label={"Home"}/>
            <MenuItem link={"/about"} label={"About"}/>
            <MenuItem link={"/profile"} label={"Profile"}/>
        </div>
    </header>
}