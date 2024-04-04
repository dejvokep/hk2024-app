import Link from "next/link";

export default function MenuItem({link, label}: {link: string, label: string}) {
    return <div>
        <h1><Link href={link}>{label}</Link></h1>
    </div>
}