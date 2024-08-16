"use client";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from "@mui/material";
import { ReactNode, useState } from "react";

export default function LessonDialog({
    title,
    closeDialogText = "Begin exercise",
    dialogPages
}: {
    title: string;
    /** @default "Begin exercise" */
    closeDialogText?: string;
    dialogPages: ReactNode[];
}) {
    const [open, setOpen] = useState(true);
    const [page, setPage] = useState(0);

    const CurrPageContent = dialogPages[page];

    const NextBtn = <Button onClick={() => setPage(page + 1)}>Next</Button>;
    const LastBtn = (
        <Button onClick={() => setOpen(false)}>{closeDialogText}</Button>
    );

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{CurrPageContent}</DialogContent>
            <DialogActions>
                {page < dialogPages.length - 1 ? NextBtn : LastBtn}
            </DialogActions>
        </Dialog>
    );
}
