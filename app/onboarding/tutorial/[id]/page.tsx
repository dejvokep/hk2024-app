import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    return <div className={"min-h-screen w-full relative"}>
        <Link href={params.id === "10" ? "/onboarding" : "/onboarding/tutorial/" + ((+params.id)+1)}><Image src={"/tutorial/Intro-" + params.id + ".png"} alt={"tutorial step"} fill={true}/></Link>
    </div>
}