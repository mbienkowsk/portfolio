import type {Metadata} from "next";
import {Inter, JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import {jbmono} from "@/styles/fonts";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "mbienkowski.pl",
    description: "Welcome to my website!",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body className={jbmono.className}>
            <div className="flex justify-center">
            <div className="w-max  2xl:w-2/3">
                {children}
            </div>
            </div>
            </body>
        </html>
    );
}
