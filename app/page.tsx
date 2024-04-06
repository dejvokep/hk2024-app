import {Button} from "@/components/ui/button";
import Logo from "@/components/Logo";
import Link from "next/link";
import {getSession} from "@auth0/nextjs-auth0";
import {redirect} from "next/navigation";

export default async function Home() {
    const session = await getSession();

    if (session)
        return redirect("/zone")

    return (
        <main className={"flex justify-center w-full min-h-screen py-[100px]"}>
            <div className={"flex flex-col justify-between"}>
                <Logo className={"fill-primary h-32 mx-auto"}/>
                <Button className={"min-w-[320px] py-6"} asChild>
                    <Link href={"/api/auth/login"}>Login</Link>
                </Button>
            </div>
        </main>
    );
}
