"use client";

import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from "react";

export type Progress = boolean[];

const ProgressContext = createContext<{
    progress: Progress;
    setProgress: Dispatch<SetStateAction<Progress>>;
}>({
    progress: [false, false, false],
    setProgress: () => {}
});

export const useProgress = () => useContext(ProgressContext);

export default function ProgressProvider({
    children
}: {
    children: ReactNode;
}) {
    const [progress, setProgress] = useState([false, false, false]);

    return (
        <ProgressContext.Provider value={{ progress, setProgress }}>
            {children}
        </ProgressContext.Provider>
    );
}
