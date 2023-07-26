import Image from 'next/image';
import tarot from '../../../public/tarot.json';

/**
 * Reduced from a class, this is a simple interface for a Tarot Card
 */
interface TarotCard {
	name: string;
	rank: string;
	suit: string;
	image: string;
	fortuneTelling: string[];
	keywords: string[];
	meanings: string[];
}

/**
 * Loads the card information from our JSON file for now
 * @returns {TarotCard[]} returns the tarot cards after shuffling them
 */
function loadCards(): TarotCard[] {
    const tarotCards: TarotCard[] = tarot.tarot_interpretations.map((card): TarotCard => 
		({
			name: card.name,
			rank: card.rank.toString(),
			suit: card.suit,
			image: "/tarot/" + card.name.replace(/\s/g, "") + '.png',
			fortuneTelling: card.fortune_telling,
			keywords: card.keywords,
			meanings: card.meanings.light.concat(card.meanings.shadow),
		})
	);
    return shuffleDeck(tarotCards);
}

/**
 * Shuffles the current deck of Tarot cards
 * @param {TarotCard[]} tarotCards - The current deck of Tarot cards to shuffle
 * @returns {TarotCard[]} a shuffled array of Tarot Cards
 */
function shuffleDeck(tarotCards: TarotCard[]): TarotCard[] {
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

/**
 * Shows a shuffled set of cards for now.
 * @returns {JSX.Element} with an image for each card in the deck currently
 */
function CardComponent() {
	const tarotDeck = loadCards();
	return (
		<div>
			{tarotDeck.map((card: TarotCard) => (
				<div key={card.name}>
					<Image 
						src={ card.image } 
						height={500}
						width={240}
						alt={card.name}
					/>
				</div>
			))}
		</div>
	);
};

export default CardComponent;

