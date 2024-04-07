import {OnboardingData} from "@/lib/types";
import OnboardingSelect from "@/components/ui/onboarding-select";

export default function Q1({setter}: {setter: (o: OnboardingData) => void}) {
    const selections = {
        "BEGINNER": {icon: "beginner.png"},
        "INTERMEDIATE": {icon: "intermediate.png"},
        "PRO": {icon: "pro.png"}
    }

    return <div className={"relative"}>
        <div className={"h-[224px] text-[24px] text-center w-[240px] mx-auto"}>
            <h1 className={"pt-[90px] leading-7"}>How experienced are you at investing?</h1>
        </div>
        <div className={"w-full"}>
            <OnboardingSelect setSelected={v => setter({experience: v})} selections={selections}/>
        </div>
    </div>
}