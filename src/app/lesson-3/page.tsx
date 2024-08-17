import LessonDialog from "@/components/LessonDialog";
import { Container, Typography } from "@mui/material";

export default function Lesson3() {
    const title = "Lesson 3 - (Advanced) Accept both inline";
    return (
        <main>
            <Container maxWidth="md" sx={{ mt: 2 }}>
                <Typography variant="h2" component="h1">
                    {title}
                </Typography>
                <LessonDialog
                    title={title}
                    dialogPages={[
                        <>
                            <Typography>
                                At last, we&#39;re at our final option:
                                &quot;Accept&nbsp;custom&nbsp;changes&quot;.
                                This is easily the most useful and versatile
                                option.
                            </Typography>
                            <Typography>
                                Learning to resolve merge conflicts with this
                                option on this website means being able to
                                resolve merge conflicts with a text editor
                                manually if the need ever arises. This is also
                                the only way to combine changes from two
                                branches with more control instead of just
                                duct-taping one change to the end of another.
                            </Typography>
                        </>,
                        <Typography key={1}>
                            The rest of this lesson is coming soon!
                        </Typography>
                    ]}
                />

                <Typography>
                    This exercise is coming soon! In the mean time, here are
                    some final tips for merge conflicts:
                </Typography>
                <Typography>
                    If you find your team having to resolve too many complex
                    merge conflicts too often, this may be a sign you need to
                    merge more often. Try to break your work up into smaller
                    chunks so each chunk can be completed and merged faster.
                </Typography>
                <Typography>
                    Additionally, avoid planning your work such that multiple
                    team members have to work on the same lines in the same
                    files. An approach I like using is to create function stubs
                    (functions with no bodies that always return the same dumb
                    return value) while at a meeting together with my team, then
                    splitting these un-implemented functions between each other,
                    before branching off to work on the function bodies we were
                    individually assigned.
                </Typography>
            </Container>
        </main>
    );
}
