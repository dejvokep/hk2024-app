import Menu from "@/components/menu/Menu";

export default function ZoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"mt-8 px-8 mb-16"}>
      <Menu />
      {children}
    </main>
  );
}
