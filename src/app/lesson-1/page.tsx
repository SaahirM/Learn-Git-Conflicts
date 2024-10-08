import CheckAnsBtn from "@/components/CheckAnsBtn";
import ChoiceProvider from "@/components/ChoiceProvider";
import LessonDialog from "@/components/LessonDialog";
import Resolver from "@/components/Resolver";
import { Box, Container, Typography } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Lesson 1 - Learn Git Conflicts"
};

export default function Lesson1() {
    const lessonTitle = "Lesson 1 - Accept mine or theirs";

    return (
        <main>
            <Container maxWidth="md" sx={{ mt: 2 }}>
                <Typography variant="h2" component="h1">
                    {lessonTitle}
                </Typography>

                <LessonDialog
                    title={lessonTitle}
                    dialogPages={[
                        <>
                            <Typography>
                                Merge conflicts happen because git gets confused
                                when you ask it to merge two separate branches
                                with changes (often made by two separate people)
                                to the same lines within the same files. To git,
                                a merge conflict is two changes seemingly made
                                to the same place at the same time.
                            </Typography>
                            <Typography>
                                It doesn&#39;t know which changes are the
                                &quot;real&quot; ones it needs to apply. It
                                needs YOU, a human being, to resolve these
                                problems. You can understand context information
                                it doesn&#39;t even have access to.
                            </Typography>
                        </>,
                        <>
                            <Typography>
                                To resolve any merge conflict, you must choose
                                between four options:
                            </Typography>
                            <Box component="ul">
                                <Typography component="li">
                                    Accept your changes: Use if you want to
                                    apply <em>only your</em> changes
                                </Typography>
                                <Typography component="li">
                                    Accept their changes: Use if you want to
                                    apply <em>only</em> the changes that are{" "}
                                    <em>NOT yours</em>
                                </Typography>
                                <Typography component="li">
                                    Accept both changes: Use if you want to
                                    apply <em>both changes</em> (one after the
                                    other)
                                </Typography>
                                <Typography component="li">
                                    Custom: Use if you want to apply both
                                    changes, but need to combine them into the
                                    same lines (not just one after the other)
                                </Typography>
                            </Box>
                            <Typography>
                                By choosing one of these options, you are
                                answering the question &quot;If I had made both
                                changes on the same branch, how would I have
                                made them?&quot;.
                            </Typography>
                            <Typography>
                                These options might go by different names. For
                                example,
                                &quot;Accept&nbsp;your&nbsp;changes&quot; is
                                sometimes called
                                &quot;Accept&nbsp;current&quot;,
                                &quot;Accept&nbsp;their&nbsp;changes&quot; may
                                be referred to as
                                &quot;Accept&nbsp;incoming&quot;, and
                                &quot;Custom&quot; is equivalent to
                                &quot;Manual&nbsp;Resolution&quot;.
                            </Typography>
                            <Typography>
                                This tutorial presents these options to you
                                neatly with clear buttons, but if you aren&#39;t
                                using a tool that comes with a special interface
                                for merge conflicts, you have to resolve them
                                manually with a text editor. This is equivalent
                                to the &quot;Custom&quot; option on this
                                website.
                            </Typography>
                        </>,
                        <>
                            <Typography>
                                This first lesson is about the first two
                                options:
                                &quot;Accept&nbsp;your&nbsp;changes&quot; vs
                                &quot;Accept&nbsp;their&nbsp;changes&quot;.
                            </Typography>
                            <Typography>
                                These options are for when you <em>only</em>{" "}
                                want one of the two changes present in front of
                                you. How do you know you want this? There is no
                                hard rule. You need to assess the unique
                                scenario you are in.
                            </Typography>
                            <Typography>
                                This can happen if, for example, both changes
                                are doing the same thing, or if one of the
                                changes are no longer relevant.
                            </Typography>
                        </>,
                        <Typography key={3}>
                            Example 1: While working individually, you and a
                            teammate both encounter the same problem and import
                            the same library at the top of the same file to fix
                            this problem in separate places. To resolve the
                            merge conflict that happens when you merge your work
                            together, you can hit either
                            &quot;Accept&nbsp;your&nbsp;changes&quot; or
                            &quot;Accept&nbsp;their&nbsp;changes&quot;.
                        </Typography>,
                        <>
                            <Typography>
                                Example 2: Say you&#39;re developing a game with
                                a team. This week, you&#39;re creating a new
                                level, while your teammate Alice is making it so
                                players can control how fast the MainCharacter()
                                moves.
                            </Typography>
                            <Typography>
                                You decide the MainCharacter() needs to run a
                                little faster for this level to feel fun, so you
                                increase its speed. But Alice removed the
                                ability to manually set the
                                MainCharacter()&#39;s speed.
                            </Typography>
                            <Typography>
                                In this scenario, you need to select
                                &quot;Accept&nbsp;their&nbsp;changes&quot; to
                                resolve the merge conflict that happens when you
                                merge your work together. Your change is no
                                longer relevant because, in the version of this
                                code with both your changes, you no longer need
                                to set the MainCharacter()&#39;s speed while
                                initializing a level.
                            </Typography>
                        </>,
                        <Typography key={5}>
                            Now try an exercise to see if you understand this!
                        </Typography>
                    ]}
                />

                <Typography variant="h3" component="h2" mt={2}>
                    Scenario
                </Typography>
                <Typography>
                    You are a member of a chess club and you are creating a
                    website for it with your friend, another member. You agree
                    to divide your work as follows: your friend is responsible
                    for improving the homepage, while you will be adding a new
                    &quot;About us&quot; page. So, you set off on your own
                    branches to work on your parts until it&#39;s time to meet
                    again and merge your work.
                </Typography>
                <Typography>
                    Unfortunately, there&#39;s been a miscommunication. You
                    didn&#39;t define your boundaries well, so you both did some
                    duplicate work (Oops!). Specifically, what&#39;s happened is
                    your friend added a section to the homepage to lead visitors
                    to the new &quot;About us&quot; page you were working on.
                    But you added a similar section to the homepage, not
                    realizing your buddy had already done this on their branch.
                </Typography>
                <Typography>
                    You had a friendly discussion about this and came to the
                    conclusion the section you did was worded better than your
                    friend&#39;s, and that it should be kept.
                </Typography>
                <Typography>
                    Now you are trying to merge your branches to main together.
                    Can you resolve this merge conflict?
                </Typography>

                <ChoiceProvider>
                    <Resolver
                        codeBefore={["...", "</section>", "\n"]}
                        myChanges={[
                            "<section>",
                            "    <h3>Learn more</h3>",
                            "    <p>",
                            "        Want to know more about how our crew ",
                            "        was formed? Visit our ",
                            "        <a href='/about'>About us</a> page!",
                            "    </p>",
                            "</section>"
                        ]}
                        theirChanges={[
                            "<section>",
                            "    <h3>About us</h3>",
                            "    <p>",
                            "        Learn more about us ",
                            "        <a href='/about'>here</a>",
                            "    </p>",
                            "</section>"
                        ]}
                        codeAfter={["\n", "<section>", "..."]}
                    />
                    <CheckAnsBtn
                        lessonNum={1}
                        ans="mine"
                        feedback={{
                            correct: (
                                <>
                                    Correct! Move on to{" "}
                                    <Link href={"/lesson-2"}>lesson 2</Link>{" "}
                                    whenever you&#39;re ready
                                </>
                            ),
                            incorrect: (
                                <>
                                    Not quite. Try again! Hint: The website
                                    would look weird if both these sections were
                                    here so only one of them should be added.
                                    Read the scenario again to determine which
                                    one!
                                </>
                            )
                        }}
                    />
                </ChoiceProvider>
            </Container>
        </main>
    );
}
