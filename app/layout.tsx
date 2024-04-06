import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {UserProvider} from "@auth0/nextjs-auth0/client";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TB Investing",
  description: "Tatra banka investing app for HK2024.",
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
