import {Button} from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  return (
      <main className="grid w-full min-h-screen place-items-center">
              <div className={"flex flex-col place-items-center space-y-[20vh]"}>
                  <Logo className={"fill-primary h-32"}/>
                  <Button className={"min-w-[250px]"} asChild>
                      <Link href={"/api/auth/login"}>Login</Link>
                  </Button>
              </div>
      </main>
  );
}
