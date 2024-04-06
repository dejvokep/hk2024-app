import {LoaderCircle} from "lucide-react";

export default function Loading() {
    return <div className={"min-h-screen grid place-items-center"}>
        <LoaderCircle className={"h-16 w-16 animate-spin"} />
    </div>
}