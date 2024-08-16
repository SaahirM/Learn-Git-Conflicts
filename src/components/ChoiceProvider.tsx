"use client";

import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from "react";

export type Choice = "mine" | "theirs" | "both" | null;

const ChoiceContext = createContext<{
    choice: Choice;
    setChoice: Dispatch<SetStateAction<Choice>>;
}>({
    choice: null,
    setChoice: () => {}
});

export const useChoice = () => useContext(ChoiceContext);

export default function ChoiceProvider({ children }: { children: ReactNode }) {
    const [choice, setChoice] = useState<Choice>(null);
    return (
        <ChoiceContext.Provider value={{ choice, setChoice }}>
            {children}
        </ChoiceContext.Provider>
    );
}
