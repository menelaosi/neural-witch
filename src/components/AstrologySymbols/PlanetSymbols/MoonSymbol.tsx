import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import PlanetSymbol from "./PlanetSymbol";

export default function MoonSymbol(props: AstrologySymbolProps) {
	const xPosition = Math.round(props.x - 2);
	const yPosition = Math.round(props.y - 7);

	return (
		<PlanetSymbol
			x={xPosition}
			y={yPosition}
			path={`m${xPosition}, ${yPosition} a 7.4969283,7.4969283 0 0 1 0,14.327462 7.4969283,7.4969283 0 1 0 0,-14.327462 z`}
		/>
	);
};