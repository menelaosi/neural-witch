import AstrologySymbol from "../AstrologySymbol";

interface PlanetProps {
	x: number;
	y: number;
	path: string;
	strokeColor: string;
	strokeWidth: string;
	hasSecondPart?: boolean;
	secondPath?: string;
};

class PlanetSymbol extends AstrologySymbol {
	strokeColor = "#000000";
	strokeWidth = 1.8;
};

export default PlanetSymbol;