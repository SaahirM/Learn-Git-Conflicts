"use client";

import { Button, Typography } from "@mui/material";
import { Choice, useChoice } from "./ChoiceProvider";
import { ReactNode, useState } from "react";
import { useProgress } from "./ProgressProvider";

export default function CheckAnsBtn({
    ans,
    feedback,
    lessonNum
}: {
    ans: Choice;
    feedback: { correct: ReactNode; incorrect: ReactNode };
    lessonNum: number;
}) {
    const [correct, setCorrect] = useState<boolean | null>(null);
    const { choice } = useChoice();
    const { setProgress } = useProgress();

    const onClick = () => {
        if (choice === null) return;

        if (choice === ans) {
            setCorrect(true);
            setProgress((progress) =>
                progress.toSpliced(lessonNum - 1, 1, true)
            );
        } else {
            setCorrect(false);
        }
    };

    return (
        <>
            {correct === true ? (
                <Typography color={(theme) => theme.palette.success.main} m={0}>
                    {feedback.correct}
                </Typography>
            ) : correct === false ? (
                <Typography color={(theme) => theme.palette.error.main} m={0}>
                    {feedback.incorrect}
                </Typography>
            ) : (
                <></>
            )}
            <Button
                onClick={onClick}
                variant="contained"
                color="success"
                sx={{ mt: 2 }}
                disabled={correct === true}
            >
                Check
            </Button>
        </>
    );
}
