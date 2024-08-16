"use client";

import {
    Box,
    darken,
    lighten,
    SxProps,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";
import { Kode_Mono } from "next/font/google";
import { useChoice } from "./ChoiceProvider";

const kodeMono = Kode_Mono({ subsets: ["latin"] });

const CLR_MINE = "#D6EDFA";
const CLR_THEIRS = "#FFE7C6";

export default function Resolver({
    codeBefore,
    myChanges,
    theirChanges,
    codeAfter
}: {
    codeBefore: string[];
    myChanges: string[];
    theirChanges: string[];
    codeAfter: string[];
}) {
    const { choice, setChoice } = useChoice();

    const getToggleBtnStyles = (clr: string) => ({
        backgroundColor: lighten(clr, 0.75),
        "&:hover": {
            backgroundColor: lighten(clr, 0.5)
        },
        "&.Mui-selected": {
            backgroundColor: clr
        },
        "&.Mui-selected:hover": {
            backgroundColor: darken(clr, 0.05)
        }
    });

    return (
        <Box mt={2}>
            <ToggleButtonGroup
                value={choice}
                exclusive
                onChange={(_, newChoice) => setChoice(newChoice)}
            >
                <ToggleButton value="mine" sx={getToggleBtnStyles(CLR_MINE)}>
                    Accept my changes
                </ToggleButton>
                <ToggleButton
                    sx={getToggleBtnStyles(CLR_THEIRS)}
                    value="theirs"
                >
                    Accept their changes
                </ToggleButton>
                <ToggleButton value="both">Accept both</ToggleButton>
                <ToggleButton value="custom" disabled>
                    Custom
                </ToggleButton>
            </ToggleButtonGroup>
            <Box
                border="1px solid black"
                mt={1}
                borderRadius={1}
                component="pre"
                whiteSpace="pre-wrap"
            >
                <Box component="code" className={kodeMono.className}>
                    {codeBefore.map((line, i) => (
                        <CodeLine key={i} line={line} />
                    ))}
                    {myChanges.map((line, i) => (
                        <CodeLine
                            key={i}
                            line={line}
                            bgColour={CLR_MINE}
                            chosen={choice === "both" || choice === "mine"}
                        />
                    ))}
                    {theirChanges.map((line, i) => (
                        <CodeLine
                            key={i}
                            line={line}
                            bgColour={CLR_THEIRS}
                            chosen={choice === "both" || choice === "theirs"}
                        />
                    ))}
                    {codeAfter.map((line, i) => (
                        <CodeLine key={i} line={line} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

function CodeLine({
    line,
    bgColour,
    chosen
}: {
    line: string;
    bgColour?: string;
    chosen?: boolean;
}) {
    let styles: SxProps = {};
    if (bgColour) {
        styles = {
            backgroundColor: chosen ? bgColour : lighten(bgColour, 0.5)
        };
    }

    return (
        <Box sx={styles} component="span" display="block">
            {line}
        </Box>
    );
}
