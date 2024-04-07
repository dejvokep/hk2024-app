export default function Goal({info}: {info: any}) {
    if (!info.questionnaire || !info.questionnaire.goal)
        return <p>No goal.</p>

    return <div className="w-full fixed bottom-[80px] flex z-10 gap-5 self-stretch px-5 py-1.5 text-base">
        <div>

        </div>
    </div>
}