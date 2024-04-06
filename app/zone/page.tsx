import {getSession} from "@auth0/nextjs-auth0";

export default async function Page() {
    const session = await getSession()

    return <div>
        <h1 className={"text-2xl"}>Welcome, {session?.user.nickname}!</h1>
    </div>
}