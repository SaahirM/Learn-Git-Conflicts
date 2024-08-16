import Cloudsave from "@/components/Cloudsave";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function Template({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            <header>
                <Navbar />
                <Cloudsave />
            </header>
            {children}
        </>
    );
}
