import * as React from "react";
import { TarotCard } from "../types/TarotCard";


interface Props {
    currentCard: TarotCard;
}

export const CardComponent = (props: Props) => (
    <div>
        <img 
            src={ props.currentCard.image } 
            height="500"
            width="240"
        />
    </div>
);