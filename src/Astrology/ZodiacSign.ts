import { Elements } from './Elements';
import { Planet } from './Planet';

class ZodiacSign {
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