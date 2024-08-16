"use client";

import { Box, Tab, Tabs } from "@mui/material";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { useProgress } from "./ProgressProvider";

export default function Navbar() {
    const path = usePathname();
    const [activeTab, setActiveTab] = useState(path);
    const { progress } = useProgress();

    const handleChange = (_e: SyntheticEvent, newVal: string) => {
        setActiveTab(newVal);
    };

    return (
        <Box>
            <Tabs
                value={activeTab}
                onChange={handleChange}
                sx={(theme) => ({
                    backgroundColor: theme.palette.grey[100],
                    "& .Mui-selected": {
                        borderRight: "1px dashed black",
                        borderLeft: "1px dashed black",
                        backgroundColor: theme.palette.background.default
                    }
                })}
            >
                <Tab
                    href="/"
                    value="/"
                    LinkComponent={Link}
                    label="Lesson 0 - Intro"
                />
                <Tab
                    href="/lesson-1"
                    value="/lesson-1"
                    LinkComponent={Link}
                    label="Lesson 1"
                    icon={progress[0] ? <DoneOutlineRoundedIcon /> : undefined}
                    iconPosition="end"
                />
                <Tab
                    href="/lesson-2"
                    value="/lesson-2"
                    LinkComponent={Link}
                    label="Lesson 2"
                    icon={progress[1] ? <DoneOutlineRoundedIcon /> : undefined}
                    iconPosition="end"
                />
                <Tab
                    href="/lesson-3"
                    value="/lesson-3"
                    LinkComponent={Link}
                    label="Lesson 3"
                    icon={progress[2] ? <DoneOutlineRoundedIcon /> : undefined}
                    iconPosition="end"
                />
            </Tabs>
        </Box>
    );
}
