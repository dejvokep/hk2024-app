import {OnboardingData} from "@/lib/types";
import OnboardingSelect from "@/components/ui/onboarding-select";

export default function Q4({setter}: {setter: (o: OnboardingData) => void}) {
    const selections = {
        "LOW": {icon: "low.png"},
        "MEDIUM": {icon: "med.png"},
        "HIGH": {icon: "high.png"}
    }

    return <div className={"relative"}>
        <div className={"h-[224px] text-[24px] text-center w-[240px] mx-auto"}>
            <h1 className={"pt-[90px] leading-7"}>What&apos;s more important to you when investing?</h1>
        </div>
        <div className={"w-full"}>
            <OnboardingSelect setSelected={v => setter({risk: v})} selections={selections}/>
        </div>
    </div>
}