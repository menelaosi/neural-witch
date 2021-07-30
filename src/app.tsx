import * as React from "react";
import { CardComponent } from "./components/CardComponent";
import { AstrologyInfoContainer } from "./containers/AstrologyInfoContainer";
import { CardContainer } from "./containers/CardContainer";
import { loadCards } from "./Tarot/TarotCard";

export const App = () => {
    const tarotDeck = loadCards();
    return (
        <>
            <CardContainer tarotDeck={tarotDeck} />
            <AstrologyInfoContainer />
        </>
    );
};