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

// Planet Symbols
export enum PlanetSymbol {
	Sun = 'Sun',
	Moon = 'Moon',
	Mercury = 'Mercury',
	Venus = 'Venus',
	Mars = 'Mars',
	Jupiter = 'Jupiter',
	Saturn = 'Saturn',
	Uranus = 'Uranus',
	Neptune = 'Neptune',
	Pluto = 'Pluto',
	Chiron = 'Chiron',
	Lilith = 'Lilith',
	NorthNode = 'Nnode',
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

export enum SignSymbol {
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
