import * as React from "react";
import { CardComponent } from "../components/CardComponent";
import { TarotCard } from "../Tarot/TarotCard";

interface Props {
    tarotDeck: TarotCard[];
}

export const CardContainer = (props: Props) => (
    <CardComponent currentCard={props.tarotDeck[0]}/>
);
