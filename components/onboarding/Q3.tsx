import {OnboardingData} from "@/lib/types";
import OnboardingSelect from "@/components/ui/onboarding-select";

export default function Q3({setter}: {setter: (o: OnboardingData) => void}) {
    const selections = {
        "LESS_10": {icon: "less_10k.png"},
        "10": {icon: "10k.png"},
        "100": {icon: "100k.png"}
    }

    return <div className={"relative"}>
        <div className={"h-[224px] text-[24px] text-center w-[240px] mx-auto"}>
            <h1 className={"pt-[90px] leading-7"}>How much are you planning to invest?</h1>
        </div>
        <div className={"w-full"}>
            <OnboardingSelect setSelected={v => setter({investment: v})} selections={selections}/>
        </div>
    </div>
}