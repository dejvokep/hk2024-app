import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/Menu";
import {UserProvider} from "@auth0/nextjs-auth0/client";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HK2024 app",
  description: "HackKosice 2024 web app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <UserProvider>
        <body style={{fontFamily: "Arial, Helvetica, sans-serif"}}>
        {children}
        </body>
      </UserProvider>
    </html>
  );
}
