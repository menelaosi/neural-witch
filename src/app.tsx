import * as React from "react";
import { AstrologyInfoContainer } from "./containers/AstrologyInfoContainer";
import { CardContainer } from "./containers/CardContainer";
import { loadCards } from "./types/TarotCard";

export const App = () => {
    const tarotDeck = loadCards();
    return (
        <>
            <CardContainer tarotDeck={tarotDeck} />
            <AstrologyInfoContainer />
        </>
    );
};