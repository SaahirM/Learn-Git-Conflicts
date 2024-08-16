import CheckAnsBtn from "@/components/CheckAnsBtn";
import ChoiceProvider from "@/components/ChoiceProvider";
import LessonDialog from "@/components/LessonDialog";
import Resolver from "@/components/Resolver";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Lesson2() {
    const title = "Lesson 2 - Accept both";

    return (
        <main>
            <Container maxWidth="md">
                <Typography variant="h2" component="h1">
                    {title}
                </Typography>

                <LessonDialog
                    title={title}
                    dialogPages={[
                        <>
                            <Typography>
                                Now we move on to the third option
                                &quot;Accept&nbsp;both&nbsp;changes&quot;. This
                                option is for when you want to apply the changes
                                made to both branches. It&#39;s like placing one
                                change, then placing the other change right
                                after (on the next line).
                            </Typography>
                            <Typography>
                                This is useful if, for example, both sets of
                                changes are adding different things into some
                                kind of list, or if the changes are completely
                                unrelated to each other but happen to be on the
                                same line.
                            </Typography>
                        </>,
                        <Typography key={1}>
                            Example: Multiple team members are importing
                            unrelated packages at the top of a file to use. To
                            resolve the merge conflict that happens when these
                            branches are merged together, use
                            &quot;Accept&nbsp;both&nbsp;changes&quot;.
                        </Typography>,
                        <Typography key={2}>Now try this exercise!</Typography>
                    ]}
                />

                <Typography variant="h3" component="h2" mt={2}>
                    Scenario
                </Typography>
                <Typography>
                    You&#39;re on a team working on an application with various
                    widgets like the weather forecast, a music player, some
                    sticky notes, and more. Different members of your team are
                    implementing bits of functionality to these widgets. This
                    week, you&#39;re adding next/prev track buttons to the music
                    player, and another teammate is creating a shuffle-playlist
                    feature.
                </Typography>
                <Typography>
                    To your surprise, you run into a merge conflict when merging
                    your work to the main branch later this week. Can you
                    resolve this?
                </Typography>

                <ChoiceProvider>
                    <Resolver
                        codeBefore={[
                            "public class MusicPlayer() {",
                            "\n",
                            "...",
                            "\n"
                        ]}
                        myChanges={[
                            "    public void nextTrack() {",
                            "        Song nextSong = this.queue.dequeue();",
                            "        Song currSong = this.currSong;",
                            "\n",
                            "        this.audioStream.clear();",
                            "        this.musicBar.reset();",
                            "        this.audioStream.start(nextSong);",
                            "\n",
                            "        this.history.push(currSong);",
                            "    }",
                            "\n",
                            "    public void prevTrack() {",
                            "        Song prevSong = this.history.pop();",
                            "        Song currSong = this.currSong;",
                            "\n",
                            "        this.audioStream.clear();",
                            "        this.musicBar.reset();",
                            "        this.audioStream.start(prevSong);",
                            "\n",
                            "        this.queue.insertFirst(currSong);",
                            "    }",
                            "\n"
                        ]}
                        theirChanges={[
                            "    public void shuffle() {",
                            "        Shuffler shuffler = new Shuffler(Random.randInt());",
                            "        shuffler.shuffle(this.queue);",
                            "    }",
                            "\n"
                        ]}
                        codeAfter={["\n", "...", "\n", "}"]}
                    />
                    <CheckAnsBtn
                        lessonNum={2}
                        ans={"both"}
                        feedback={{
                            correct: (
                                <>
                                    Yes! These changes are not related to each
                                    other, so they must both be applied. Move on
                                    to <Link href={"/lesson-3"}>lesson 3</Link>{" "}
                                    whenever you&#39;re ready
                                </>
                            ),
                            incorrect: (
                                <>
                                    Incorrect. Hint: If both features were
                                    implemented by the same person, which of
                                    these changes would be here?
                                </>
                            )
                        }}
                    />
                </ChoiceProvider>
            </Container>
        </main>
    );
}
