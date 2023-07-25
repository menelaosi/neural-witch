// Planets
export enum PlanetSymbol {
	Sun = "Sun",
	Moon = "Moon",
	Mercury = "Mercury",
	Venus = "Venus",
	Mars = "Mars",
	Jupiter = "Jupiter",
	Saturn = "Saturn",
	Uranus = "Uranus",
	Neptune = "Neptune",
	Pluto = "Pluto",
	Chiron = "Chiron",
	Lilith = "Lilith",
	NorthNode = "NNode",
};

// Axes
export enum AxisSymbol {
	Ascendant = "As",
	Descendant = "Ds",
	Midheaven = "Mc",
	IlumCoeli = "Ic"
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
}

// Aspects	
interface Aspect {
	degree: number;
	orbit: number;
	color: string;
};

enum Aspects {
	Conjunction = "conjunction",
	Square = "square",
	Trine = "trine",
	Opposition = "opposition",
};

// What to do with this? Save it for now
export const ASPECTS = {
	"conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
	"square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
	"trine":{"degree":120, "orbit":8, "color":"#27AE60"},
	"opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
};

// Dignities
export enum Dignities {
	Rulership = "r",
	Detriment = "d",
	Exaltation = "e",
	ExactExaltation = "E",
	Fall = "f",
};

// Source: Aleister Crowley
export const DIGNITIES_EXACT_EXALTATION_DEFAULT = [
	{"name":"Sun", "position":19, "orbit":2}, // 19 Arise
	{"name":"Moon", "position":33, "orbit":2}, //3 Taurus
	{"name":"Mercury", "position":155, "orbit":2}, //15 Virgo
	{"name":"Venus", "position":357, "orbit":2}, //27 Pisces
	{"name":"Mars", "position":298, "orbit":2}, //28 Capricorn
	{"name":"Jupiter", "position":105, "orbit":2}, //15 Cancer
	{"name":"Saturn", "position":201, "orbit":2}, //21 Libra
	{"name":"NNode", "position":63, "orbit":2}, //3 Geminy
];
