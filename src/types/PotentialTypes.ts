/**
 * To reduce the source code complexity, all unused interfaces written during 
 * the first phase of development have been moved here. They will be moved out and used more later
 */

/**
 * TODO: Use elements for further learnings and things
 */
interface Elements {
    name: string;
    symbol: string;
    property: string[];
}

/**
 * TODO: Use Planet for more things
 */
interface Planet {
    name: string;
    unicode_symbol?: string;
    position: number;
}

/**
 * Each suit will have a name and element
 * Maybe make this into a class if there's more functions?
 */
interface Suit {
    name: string;
    element: Elements;
}

/**
 * Interface for Zodiac Signs
 * TODO: Expand upon this and maybe make into a class later
 */
interface ZodiacSign {
    name: string;
    longitudeStart: number;
    longitudeEnd: number;
    svgSymbol: string;
    unicode_symbol: string;
    gloss: string;
    element: Elements;
    rulingBodyClassic: Planet;
    keywords: string[];
}