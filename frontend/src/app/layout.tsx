import type {Metadata} from "next";
import {ReactNode} from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "測試!",
    description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
            {children}
        </body>
        </html>
    );
}
