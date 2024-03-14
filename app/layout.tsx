import type { Metadata } from "next";
import "./globals.css";
import { jbmono } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
    title: "mbienkowski.pl",
    description: "Welcome to my website!",
};

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="text-xs sm:text-sm lg:text-base">
            <body className={`${jbmono.className}`}>
                <div className="flex justify-center">
                    <div className="w-11/12 xl:w-10/12 2xl:w-3/4 3xl:w-1/2">
                        {children}
                        <Analytics />
                    </div>
                </div>
            </body>
        </html>
    );
}
