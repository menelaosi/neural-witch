import tarot from '../assets/tarot.json';

/**
 * The class representing a Tarot Card
 */
export class TarotCard { 
    name: string; // Name of the card
    rank: string; // Rank as a string for now TODO: Add numerology things
    // suit: Suit; TODO: Make Suit a thing so more complex readings can be done
    suit: string; // Used as a string for now
    image: string; // String representing the image resource
    fortuneTelling: string[]; // String array of response
    keywords: string[]; // String array of keywords
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

            // Allows the image file to be loaded properly
            this.image = './' + name.replace(/\s/g, "") + '.png';
            this.fortuneTelling = fortuneTelling;
            this.keywords = keywords;
            this.meanings = meanings;
        }
}

/**
 * Creates a single test card. This is useful for debug purposes
 * @returns {TarotCard} a Tarot Card
 */
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

/**
 * Loads the card information from our JSON file for now
 * @returns {TarotCard[]} returns the tarot cards after shuffling them
 */
export function loadCards(): TarotCard[] {
    const tarotCards: TarotCard[] = new Array(78);
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

/**
 * Shuffles the current deck of Tarot cards
 * @param {TarotCard[]} tarotCards - The current deck of Tarot cards to shuffle
 * @returns {TarotCard[]} a shuffled array of Tarot Cards
 */
export function shuffleDeck(tarotCards: TarotCard[]): TarotCard[] {
    let currentIndex = tarotCards.length;
    let randomIndex = 0;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [tarotCards[currentIndex], tarotCards[randomIndex]] = [
            tarotCards[randomIndex],tarotCards[currentIndex]
        ];
    }
    return tarotCards;
}


