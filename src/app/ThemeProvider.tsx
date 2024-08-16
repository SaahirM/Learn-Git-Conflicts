"use client";

import { ReactNode } from "react";
import {
    experimental_extendTheme as extendTheme,
    Experimental_CssVarsProvider as CssVarsProvider
} from "@mui/material/styles";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { CssBaseline } from "@mui/material";

const theme = extendTheme({
    cssVarPrefix: "lgc",
    typography: { body1: { marginBottom: "8px" } }
});

export default function ThemeProvider({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <InitColorSchemeScript />
            {children}
        </CssVarsProvider>
    );
}
