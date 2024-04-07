import {Progress} from "@/components/ui/progress";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Goal({info, sum}: { info: any, sum: number }) {
    if (!info.questionnaire || !info.questionnaire.goal)
        return <p>No goal.</p>

    const goal = info.questionnaire.goal

    return <div className="w-full z-10 px-5 py-1.5 text-base text-white mb-4">
        <div className={"border border-[#292929] rounded-sm p-4"} style={{boxShadow: "inset 0 3 3 0 rgba(255, 255, 255, 65)"}}>
            <div className={"flex justify-between"}>
                <div>
                    <p className={"text-muted text-xs"}>Your goal</p>
                    <p>{goal.name}</p>
                </div>
                <div>
                    <Image src={"/car.png"} alt={"car"} height={128} width={256} className={"h-[40px] w-auto"}/>
                </div>
            </div>
            <div className={"flex justify-between mt-3"}>
                <p>{sum}€</p>
                <p>{goal.value}€</p>
            </div>
            <div className={"h-[7px] w-full relative rounded-sm overflow-hidden mt-1"}>
                <div className={"absolute left-0 top-0 h-[7px] bg-secondary"}
                     style={{width: `${Math.min(100, sum * 100 / goal.value)}%`}}></div>
            </div>
            <Button className={"w-full font-normal mt-7"} asChild>
                <Link href={"/api/auth/login"}>Invest more</Link>
            </Button>
        </div>
    </div>
}