import AstrologySymbol from "../AstrologySymbol";

interface ZodiacSymbolProps {
	x: number;
	y: number;
	path: string;
	strokeColor: string;
	strokeWidth: string;
};

class ZodiacSymbol extends AstrologySymbol {
	strokeColor = "#000000";
	strokeWidth = 1.8;
};

export default ZodiacSymbol;