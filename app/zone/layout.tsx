import Menu from "@/components/menu/Menu";
import ProfileMenu from "@/components/menu/ProfileMenu";
import {usePathname} from "next/navigation";

export default function ZoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className={"mt-16 mb-16"}>
      <ProfileMenu />
      <Menu />
      {children}
    </main>
  );
}
