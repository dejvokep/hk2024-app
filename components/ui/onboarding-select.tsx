import Image from "next/image";

export default function OnboardingSelect<T extends {[key: string]: {icon: string}}>({selected, setSelected, selections}: {selected?: keyof T, setSelected: (v: keyof T) => void, selections: T}) {
    return <div className="flex flex-col gap-2.5 justify-between px-5 py-1.5">
        {Object.keys(selections).map(k => <div key={k} onClick={() => setSelected(k)}><img src={"/onboarding/" + selections[k].icon} alt={"option"}/></div>)}
    </div>
}