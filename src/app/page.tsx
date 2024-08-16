import LessonDialog from "@/components/LessonDialog";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Container maxWidth="lg" sx={{ mt: 2 }}>
                <Typography variant="h2" component="h1">
                    Learn Git Conflicts
                </Typography>

                <LessonDialog
                    title={"Welcome!"}
                    dialogPages={[
                        <Typography key={0}>
                            Do you struggle with merge conflicts? Are you
                            perhaps trying to resolve one right now? Try this
                            crash course and learn how to resolve git merge
                            conflicts in minutes!
                        </Typography>,
                        <Typography key={1}>
                            This tutorial was inspired by{" "}
                            <Link href="https://learngitbranching.js.org/">
                                learngitbranching
                            </Link>
                            , a far more developed experience created by{" "}
                            <Link href="https://github.com/pcottle">
                                Peter Cotl
                            </Link>{" "}
                            that introduces git in general.
                        </Typography>
                    ]}
                    closeDialogText="Let's get started!"
                />

                <Typography>
                    Navigate to <Link href="/lesson-1">lesson 1</Link> to begin
                </Typography>
            </Container>
        </main>
    );
}
