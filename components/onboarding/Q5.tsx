import {Industries, OnboardingData} from "@/lib/types";
import OnboardingSelect from "@/components/ui/onboarding-select";
import IndustrySelect from "@/components/ui/industry-select";

export default function Q5({selected, setter}: {selected: Industries[], setter: (o: OnboardingData) => void}) {
    const selections = {
        "INDUSTRIAL": {label: "Industrial"},
        "TECHNOLOGY": {label: "Technology"},
        "ENERGY": {label: "Energy"},
        "REAL_ESTATE": {label: "Real estate"},
        "FINANCE": {label: "Finance"},
        "HEALTHCARE": {label: "Healthcare"},
        "CONSUMER_DISCRETIONARY": {label: "Consumer discretionary"},
        "MATERIALS": {label: "Materials"},
        "CONSUMER_STAPLES": {label: "Consumer staples"},
        "UTILITIES": {label: "Utilities"},
        "TELECOMMUNICATIONS": {label: "Telecommunications"}
    }

    function toggle(v: Industries) {
        const n = [...selected]

        if (n.includes(v))
            delete n[n.indexOf(v)]
        else
            n.push(v)

        setter({
            interests: n
        })
    }

    return <div className={"relative"}>
        <div className={"h-[224px] text-[24px] text-center w-[240px] mx-auto"}>
            <h1 className={"pt-[90px] leading-7"}>Which of the following industries interest you?</h1>
        </div>
        <div className={"w-full"}>
            <IndustrySelect selected={selected} toggle={toggle} selections={selections}/>
        </div>
    </div>
}