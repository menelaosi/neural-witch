import * as React from "react";
import { Suit } from './Suit';
import AceOfCups from '../assets/img/AceOfCups.png';
import AceOfPentacles from '../assets/img/AceOfPentacles.png';
import AceOfSwords from '../assets/img/AceOfSwords.png';
import AceOfWands from '../assets/img/AceOfSwords.png';
import Death from '../assets/img/Death.png';
import EightOfCups from '../assets/img/EightOfCups.png';
import EightOfPentacles from '../assets/img/EightOfPentacles.png';
import EightOfSwords from '../assets/img/EightOfSwords.png';
import EightOfWands from '../assets/img/EightOfWands.png';
import FiveOfCups from '../assets/img/FiveOfCups.png';
import FiveOfPentacles from '../assets/img/FiveOfPentacles.png';
import FiveOfSwords from '../assets/img/FiveOfSwords.png';
import FiveOfWands from '../assets/img/FiveOfWands.png';
import FourOfCups from '../assets/img/FourOfCups.png';
import FourOfPentacles from '../assets/img/FourOfPentacles.png';
import FourOfSwords from '../assets/img/FourOfSwords.png';
import FourOfWands from '../assets/img/FourOfWands.png';
import Judgement from '../assets/img/Judgement.png';
import Justice from '../assets/img/Justice.png';
import KingOfCups from '../assets/img/KingOfCups.png';
import KingOfPentacles from '../assets/img/KingOfPentacles.png';
import KingOfSwords from '../assets/img/KingOfSwords.png';
import KingOfWands from '../assets/img/KingOfWands.png';
import KnightOfCups from '../assets/img/KnightOfCups.png';
import KnightOfPentacles from '../assets/img/KnightOfPentacles.png';
import KnightOfSwords from '../assets/img/KnightOfSwords.png';
import KnightOfWands from '../assets/img/KnightOfWands.png';
import NineOfCups from '../assets/img/NineOfCups.png';
import NineOfPentacles from '../assets/img/NineOfPentacles.png';
import NineOfSwords from '../assets/img/NineOfSwords.png';
import NineOfWands from '../assets/img/NineOfWands.png';
import PageOfCups from '../assets/img/PageOfCups.png';
import PageOfPentacles from '../assets/img/PageOfPentacles.png';
import PageOfSwords from '../assets/img/PageOfSwords.png';
import PageOfWands from '../assets/img/PageOfWands.png';
import QueenOfCups from '../assets/img/QueenOfCups.png';
import QueenOfPentacles from '../assets/img/QueenOfPentacles.png';
import QueenOfSwords from '../assets/img/QueenOfSwords.png';
import QueenOfWands from '../assets/img/QueenOfWands.png';
import SevenOfCups from '../assets/img/SevenOfCups.png';
import SevenOfPentacles from '../assets/img/SevenOfPentacles.png';
import SevenOfSwords from '../assets/img/SevenOfSwords.png';
import SevenOfWands from '../assets/img/SevenOfWands.png';
import SixOfCups from '../assets/img/SixOfCups.png';
import SixOfPentacles from '../assets/img/SixOfPentacles.png';
import SixOfSwords from '../assets/img/SixOfSwords.png';
import SixOfWands from '../assets/img/SixOfWands.png';
import Strength from '../assets/img/Strength.png';
import Temperance from '../assets/img/Temperance.png';
import TenOfCups from '../assets/img/TenOfCups.png';
import TenOfPentacles from '../assets/img/TenOfPentacles.png';
import TenOfSwords from '../assets/img/TenOfSwords.png';
import TenOfWands from '../assets/img/TenOfWands.png';
import TheChariot from '../assets/img/TheChariot.png';
import TheDevil from '../assets/img/TheDevil.png';
import TheEmperor from '../assets/img/TheEmperor.png';
import TheEmpress from '../assets/img/TheEmpress.png';
import TheFool from '../assets/img/TheFool.png';
import TheHangedMan from '../assets/img/TheHangedMan.png';
import TheHermit from '../assets/img/TheHermit.png';
import TheHierophant from '../assets/img/TheHierophant.png';
import TheHighPriestess from '../assets/img/TheHighPriestess.png';
import TheLovers from '../assets/img/TheLovers.png';
import TheMagician from '../assets/img/TheMagician.png';
import TheMoon from '../assets/img/TheMoon.png';
import TheStar from '../assets/img/TheStar.png';
import TheSun from '../assets/img/TheSun.png';
import TheTower from '../assets/img/TheTower.png';
import TheWorld from '../assets/img/TheWorld.png';
import ThreeOfCups from '../assets/img/ThreeOfCups.png';
import ThreeOfPentacles from '../assets/img/ThreeOfPentacles.png';
import ThreeOfSwords from '../assets/img/ThreeOfSwords.png';
import ThreeOfWands from '../assets/img/ThreeOfWands.png';
import TwoOfCups from '../assets/img/TwoOfCups.png';
import TwoOfPentacles from '../assets/img/TwoOfPentacles.png';
import TwoOfSwords from '../assets/img/TwoOfSwords.png';
import TwoOfWands from '../assets/img/TwoOfWands.png';
import WheelOfFortune from '../assets/img/WheelOfFortune.png';
import tarot from './tarot.json';


export class TarotCard { 
    name: string;
    rank: string;
    // suit: Suit; TODO: Make Suit a thing so more complex readings can be done
    suit: string;
    image: string; 
    fortuneTelling: string[];
    keywords: string[];
    meanings: string[]; //TODO: Make this have layers to be an object with a string array

    constructor(
        name: string,
        rank: string,
        suit: string,
        fortuneTelling: string[],
        keywords: string[],
        meanings: string[],
        ) {
            this.name = name;
            this.rank = rank;
            this.suit = suit;
            //this.image = './' + name.replace(/\s/g, "") + '.png';
            this.image = getImage(name);
            this.fortuneTelling = fortuneTelling;
            this.keywords = keywords;
            this.meanings = meanings;
        }
}

function getImage(name: string): string {
    switch(name) {
        case "Ace Of Cups": return AceOfCups;
        case "Ace Of Pentacles": return AceOfPentacles;
        case "Ace Of Swords": return AceOfSwords;
        case "Ace Of Wands": return AceOfWands;
        case "Death": return Death;
        case "Eight Of Cups": return EightOfCups;
        case "Eight Of Pentacles": return EightOfPentacles;
        case "Eight Of Swords": return EightOfSwords;
        case "Eight Of Wands": return EightOfWands;
        case "Five Of Cups": return FiveOfCups;
        case "Five Of Pentacles": return FiveOfPentacles;
        case "Five Of Swords": return FiveOfSwords;
        case "Five Of Wands": return FiveOfWands;
        case "Four Of Cups": return FourOfCups;
        case "Four Of Pentacles": return FourOfPentacles;
        case "Four Of Swords": return FourOfSwords;
        case "Four Of Wands": return FourOfWands;
        case "Judgement": return Judgement;
        case "Justice": return Justice;
        case "King Of Cups": return KingOfCups;
        case "King Of Pentacles": return KingOfPentacles;
        case "King Of Swords": return KingOfSwords;
        case "King Of Wands": return KingOfWands;
        case "Knight Of Cups": return KnightOfCups;
        case "Knight Of Pentacles": return KnightOfPentacles;
        case "Knight Of Swords": return KnightOfSwords;
        case "Knight Of Wands": return KnightOfWands;
        case "Nine Of Cups": return NineOfCups;
        case "Nine Of Pentacles": return NineOfPentacles;
        case "Nine Of Swords": return NineOfSwords;
        case "Nine Of Wands": return NineOfWands;
        case "Page Of Cups": return PageOfCups;
        case "Page Of Pentacles": return PageOfPentacles;
        case "Page Of Swords": return PageOfSwords;
        case "Page Of Wands": return PageOfWands;
        case "Queen Of Cups": return QueenOfCups;
        case "Queen Of Pentacles": return QueenOfPentacles;
        case "Queen Of Swords": return QueenOfSwords;
        case "Queen Of Wands": return QueenOfWands;
        case "Seven Of Cups": return SevenOfCups;
        case "Seven Of Pentacles": return SevenOfPentacles;
        case "Seven Of Swords": return SevenOfSwords;
        case "Seven Of Wands": return SevenOfWands;
        case "Six Of Cups": return SixOfCups;
        case "Six Of Pentacles": return SixOfPentacles;
        case "Six Of Swords": return SixOfSwords;
        case "Six Of Wands": return SixOfWands;
        case "Strength": return Strength;
        case "Temperance": return Temperance;
        case "Ten Of Cups": return TenOfCups;
        case "Ten Of Pentacles": return TenOfPentacles;
        case "Ten Of Swords": return TenOfSwords;
        case "Ten Of Wands": return TenOfWands;
        case "The Chariot": return TheChariot;
        case "The Devil": return TheDevil;
        case "The Emperor": return TheEmperor;
        case "The Empress": return TheEmpress;
        case "The Fool": return TheFool;
        case "The Hanged Man": return TheHangedMan;
        case "The Hermit": return TheHermit;
        case "The Hierophant": return TheHierophant;
        case "The High Priestess": return TheHighPriestess;
        case "The Lovers": return TheLovers;
        case "The Magician": return TheMagician;
        case "The Moon": return TheMoon;
        case "The Star": return TheStar;
        case "The Sun": return TheSun;
        case "The Tower": return TheTower;
        case "The World": return TheWorld;
        case "Three Of Cups": return ThreeOfCups;
        case "Three Of Pentacles": return ThreeOfPentacles;
        case "Three Of Swords": return ThreeOfSwords;
        case "Three Of Wands": return ThreeOfWands;
        case "Two Of Cups": return TwoOfCups;
        case "Two Of Pentacles": return TwoOfPentacles;
        case "Two Of Swords": return TwoOfSwords;
        case "Two Of Wands": return TwoOfWands;
        case "Wheel Of Fortune": return WheelOfFortune;
        default:
            console.log(name);
    }
}

export function testCard(): TarotCard {
    return new TarotCard(
        "The Fool",
        "0",
        "major",
        [""],
        [""],
        [""],
    );
}

export function loadCards(): TarotCard[] {
    let tarotCards: TarotCard[] = new Array(78);
    for (let index = 0; index < tarot.tarot_interpretations.length; index++) {
        tarotCards[index] = new TarotCard(
            tarot.tarot_interpretations[index].name,
            tarot.tarot_interpretations[index].rank.toString(),
            tarot.tarot_interpretations[index].suit,
            tarot.tarot_interpretations[index].fortune_telling,
            tarot.tarot_interpretations[index].keywords,
            tarot.tarot_interpretations[index].meanings.light.concat(tarot.tarot_interpretations[index].meanings.shadow),
        );
    }
    return shuffleDeck(tarotCards);
}

export function shuffleDeck(tarotCards: TarotCard[]): TarotCard[] {
    console.log("Shuffling deck");
    let currentIndex = tarotCards.length;
    let randomIndex = 0;
    while (0 != currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [tarotCards[currentIndex], tarotCards[randomIndex]] = [
            tarotCards[randomIndex],tarotCards[currentIndex]
        ];
    }
    console.log(tarotCards[0]);
    return tarotCards;
}


