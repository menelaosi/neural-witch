import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import PlanetSymbol from "./PlanetSymbol";

export default function MoonSymbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x - 2);
	const yPosition = Math.round(y - 7);

	return (
		<PlanetSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition}
				a 7.4969283,7.4969283 0 0 1 0,14.327462 7.4969283,7.4969283 0 1 0 0,-14.327462
				z
			`}
		/>
	);
};