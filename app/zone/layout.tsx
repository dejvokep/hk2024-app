import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/Menu";
import {UserProvider} from "@auth0/nextjs-auth0/client";

export default function ZoneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <Menu />
      {children}
    </main>
  );
}
