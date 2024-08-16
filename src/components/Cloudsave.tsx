"use client";

import {
    Box,
    Button,
    CircularProgress,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import { useProgress } from "./ProgressProvider";
import { useState } from "react";
import { env } from "next-runtime-env";

export default function Cloudsave() {
    const [userInput, setUserInput] = useState("");

    const [sbOpen, setSbOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const { progress, setProgress } = useProgress();

    const NEXT_PUBLIC_SAVE_ENDPOINT = env("NEXT_PUBLIC_SAVE_ENDPOINT");
    const NEXT_PUBLIC_GET_ENDPOINT = env("NEXT_PUBLIC_GET_ENDPOINT");

    const handleSave = () => {
        if (userInput === "") {
            setMsg("Please enter a username");
            setSbOpen(true);
            return;
        } else if (NEXT_PUBLIC_SAVE_ENDPOINT === undefined) {
            setMsg("Cannot find server");
            setSbOpen(true);
            return;
        }

        setLoading(true);
        fetch(NEXT_PUBLIC_SAVE_ENDPOINT, {
            method: "PUT",
            body: JSON.stringify({
                user: userInput,
                progressJson: JSON.stringify(progress)
            })
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        `Server returned status code ${res.status}`
                    );
                }

                setMsg("Saved successfully");
                setSbOpen(true);
            })
            .catch((error) => {
                console.error(error);
                setMsg("Something went wrong");
                setSbOpen(true);
            })
            .finally(() => setLoading(false));
    };

    const handleLoad = () => {
        if (userInput === "") {
            setMsg("Please enter a username");
            setSbOpen(true);
            return;
        } else if (NEXT_PUBLIC_GET_ENDPOINT === undefined) {
            setMsg("Cannot find server");
            setSbOpen(true);
            return;
        }

        setLoading(true);
        fetch(NEXT_PUBLIC_GET_ENDPOINT, {
            method: "POST",
            body: JSON.stringify({
                user: userInput
            })
        })
            .then(async (res) => {
                const body = await res.json();
                if (res.status === 404 && body.error) {
                    setMsg(body.error);
                    setSbOpen(true);
                    return;
                } else if (!res.ok) {
                    throw new Error(
                        `Server returned status code ${res.status}`
                    );
                }

                const { progressJson } = body;
                setProgress(JSON.parse(progressJson));

                setMsg("Data loaded");
                setSbOpen(true);
            })
            .catch((error) => {
                console.error(error);
                setMsg("Something went wrong");
                setSbOpen(true);
            })
            .finally(() => setLoading(false));
    };

    return (
        <Box px={2} display="flex" alignItems="center">
            <Typography display="inline" m={0}>
                Cloudsave
            </Typography>
            <TextField
                label="Username"
                size="small"
                margin="normal"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                sx={{ mx: 2 }}
            />
            <Button variant="contained" onClick={handleSave}>
                Save
            </Button>
            <Button variant="outlined" onClick={handleLoad}>
                Load
            </Button>
            {loading && <CircularProgress sx={{ ml: 2 }} />}
            <Snackbar
                open={sbOpen}
                onClose={() => setSbOpen(false)}
                autoHideDuration={5000}
                message={msg}
            />
        </Box>
    );
}
