import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Layout from "./components/shared/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Analytics dashboard",
    description: "Track your company's growth with our analytics dashboard.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Layout children={children} />
            </body>
        </html>
    );
}
