import {Button} from "@/components/ui/button";
import Logo from "@/components/Logo";
import Link from "next/link";
import {getSession} from "@auth0/nextjs-auth0";
import {redirect} from "next/navigation";
import {createUser} from "@/lib/db_mongo";

export default async function Home() {
    const session = await getSession();

    if (session) {
        await createUser(session.user.sub.substring(6), "", "", "")
        return redirect("/zone")
    }

    return (
        <main className={"flex justify-center w-full min-h-screen py-[100px]"}>
            <div className={"flex flex-col justify-between"}>
                <Logo className={"fill-primary h-24 mx-auto"}/>
                <Button className={"min-w-[320px] py-7"} asChild>
                    <Link href={"/api/auth/login"}>Login</Link>
                </Button>
            </div>
        </main>
    );
}
