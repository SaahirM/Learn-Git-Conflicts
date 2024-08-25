import type { Metadata } from "next";
import type { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";
import ProgressProvider from "@/components/ProgressProvider";

export const metadata: Metadata = {
    title: "Tutorial - Learn Git Conflicts",
    description:
        "Learn how to resolve git merge conflicts in minutes with this " +
        "crash course!"
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" data-mui-color-scheme="light" suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <ProgressProvider>{children}</ProgressProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
