import {OnboardingData} from "@/lib/types";
import OnboardingSelect from "@/components/ui/onboarding-select";

export default function Q2({setter}: {setter: (o: OnboardingData) => void}) {
    const selections = {
        "SHORT": {icon: "short_term.png"},
        "MEDIUM": {icon: "medium.png"},
        "LONG": {icon: "long.png"}
    }

    return <div className={"relative"}>
        <div className={"h-[224px] text-[24px] text-center w-[240px] mx-auto"}>
            <h1 className={"pt-[90px] leading-7"}>How long are you comfortable keeping your money invested?</h1>
        </div>
        <div className={"w-full"}>
            <OnboardingSelect setSelected={v => setter({length: v})} selections={selections}/>
        </div>
    </div>
}