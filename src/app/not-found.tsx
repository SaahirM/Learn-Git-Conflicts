import { Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
    return (
        <main>
            <Typography variant="h2" component="h1">
                Not found
            </Typography>
            <Typography variant="body1">
                That page doesn&apos;t exist
            </Typography>
            <Typography variant="body1">
                <Link href="/">return to landing page</Link>
            </Typography>
        </main>
    );
}
