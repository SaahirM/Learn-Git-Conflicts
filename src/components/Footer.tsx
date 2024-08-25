import { Divider, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <Divider sx={{ mt: 3, mb: 1 }} />
            <Typography
                variant="caption"
                textAlign="end"
                display="block"
                mr={1}
            >
                This project is on{" "}
                <Link href="https://github.com/SaahirM/Learn-Git-Conflicts">
                    GitHub
                </Link>
            </Typography>
        </>
    );
}
