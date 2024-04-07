import {Bot, LoaderCircle} from "lucide-react";

export default function AssistantResponse({data}: {
    data: {
        status: number,
        response?: string,
    }
}) {
    if (data.status === -1) {
        return <div className={"stroke-muted text-center mt-4 grid place-items-center min-h-[50vh]"}>
            <div className={"grid place-items-center"}>
                <Bot className={"h-12 w-12"}/>
                <p>Hello! Do you have any questions?</p>
            </div>
        </div>
    }

    if (data.status === 0) {
        return <div className={"stroke-muted text-center mt-4 grid place-items-center min-h-[50vh]"}>
            <div className={"grid place-items-center"}>
                <LoaderCircle className={"h-12 w-12 animate-spin"}/>
                <p>Hang on, please...</p>
            </div>
        </div>
    }

    return <div className={"mt-6"}>
        <p className={"text-sm text-muted"}>Assistant:</p>
        <p className={"text-justify indent-8 leading-relaxed"}>{data.response}</p>
    </div>
}