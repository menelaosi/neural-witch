export interface AstrologySymbolProps {
	x: number;
	y: number;
	path?: string;
	strokeColor?: string;
	strokeWidth?: string;
	hasSecondPath?: boolean;
	secondPath?: string;
};

export interface Point {
	x: number;
	y: number;
}

export enum PlanetSymbol {
	Sun = "sun",
	Moon = "moon",
	Mercury = "mercury",
	Venus = "venus",
	Mars = "mars",
	Jupiter = "jupiter",
	Saturn = "saturn",
	Uranus = "uranus",
	Neptune = "neptune",
	Pluto = "pluto",
	Chiron = "chiron",
	Lilith = "lilith",
	NorthNode = "nnode",
};

export enum ColorSigns {
	ColorAries = "#FF4500",
	ColorTaurus = "#228B22",
	ColorGemini = "#ADD8E6",
	ColorCancer = "#4169E1",
	ColorLeo = "#FFD700",
	ColorVirgo = "#32CD32",
	ColorLibra = "#D3D3D3",
	ColorScorpio = "#483D8B",
	ColorSagittarius = "#FF6347",
	ColorCapricorn = "#808000",
	ColorAquarius = "#87CEFA",
	ColorPisces = "#4682B4",
};

//Signs
export enum SignSymbol {
	Aries = "Aries",
	Taurus = "Taurus",
	Gemini = "Gemini",
	Cancer = "Cancer",
	Leo = "Leo",
	Virgo = "Virgo",
	Libra = "Libra",
	Scorpio = "Scorpio",
	Sagittarius = "Sagittarius",
	Capricorn = "Capricorn",
	Aquarius = "Aquarius",
	Pisces = "Pisces",
};