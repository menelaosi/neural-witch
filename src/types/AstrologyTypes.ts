export interface Point {
	x: number;
	y: number;
}

export interface AstrologySymbolProps {
	point: Point;
	path?: string;
	strokeColor?: string;
	strokeWidth?: string | number;
	hasSecondPath?: boolean;
	secondPath?: string;
}

export interface LocatedPoint {
	planetName: Planets;
	point: Point;
	radius: number;
	angle: number;
	pointer: number;
}

export interface DescriptionPosition {
	text: string;
	point: Point;
}

export interface DefaultDignities {
	name: string;
	position: number;
	orbit: number;
}

export enum Dignities {
	Rulership = 'r',
	Detriment = 'd',
	Exaltation = 'e',
	ExactExaltation = 'E',
	Fall = 'f',
}

// Planet Symbols
export enum Planets {
	Sun = 'sun',
	Moon = 'moon',
	Mercury = 'mercury',
	Venus = 'venus',
	Mars = 'mars',
	Jupiter = 'jupiter',
	Saturn = 'saturn',
	Uranus = 'uranus',
	Neptune = 'neptune',
	Pluto = 'pluto',
	Chiron = 'chiron',
	Lilith = 'lilith',
	NorthNode = 'nnode',
}

export enum ColorSigns {
	ColorAries = '#FF4500',
	ColorTaurus = '#228B22',
	ColorGemini = '#ADD8E6',
	ColorCancer = '#4169E1',
	ColorLeo = '#FFD700',
	ColorVirgo = '#32CD32',
	ColorLibra = '#D3D3D3',
	ColorScorpio = '#483D8B',
	ColorSagittarius = '#FF6347',
	ColorCapricorn = '#808000',
	ColorAquarius = '#87CEFA',
	ColorPisces = '#4682B4',
}

export enum ZodiacSign {
	Aries = 'Aries',
	Taurus = 'Taurus',
	Gemini = 'Gemini',
	Cancer = 'Cancer',
	Leo = 'Leo',
	Virgo = 'Virgo',
	Libra = 'Libra',
	Scorpio = 'Scorpio',
	Sagittarius = 'Sagittarius',
	Capricorn = 'Capricorn',
	Aquarius = 'Aquarius',
	Pisces = 'Pisces',
}

export enum ZodiacNumber {
	Aries = 1,
	Taurus = 2,
	Gemini = 3,
	Cancer = 4,
	Leo = 5,
	Virgo = 6,
	Libra = 7,
	Scorpio = 8,
	Sagittarius = 9,
	Capricorn = 10,
	Aquarius = 11,
	Pisces = 12,
}

export enum Axis {
	Ascendant = 0,
	ImmumCoeli = 3,
	Descendant = 6,
	Midheaven = 9,
}
