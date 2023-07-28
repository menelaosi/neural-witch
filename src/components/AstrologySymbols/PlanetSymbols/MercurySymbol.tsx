import { AstrologySymbolProps } from "@/types/AstrologySymbolProps";
import PlanetSymbol from "./PlanetSymbol";

export default function MercurySymbol({
	x,
	y,
}: AstrologySymbolProps) {
	const xPosition = Math.round(x - 2);
	const yPosition = Math.round(y + 7);
	const crownX = xPosition + 6;
	const crownY = yPosition - 16;

	return (
		<PlanetSymbol
			x={xPosition}
			y={yPosition}
			path={`
				m ${xPosition},${yPosition} 4.26011,0
				m -2.13005,-2.98207 0,5.11213
				m 4.70312,-9.7983
				a 4.70315,4.70315 0 0 1 -4.70315,4.70314 4.70315,4.70315 0 0 1 -4.70314,-4.70314 4.70315,4.70315 0 0 1 4.70314,-4.70315 4.70315,4.70315 0 0 1 4.70315,4.70315
				z
			`}
			hasSecondPath
			secondPath={`
				m ${crownX},${crownY}
				a 3.9717855,3.9717855 0 0 1 -3.95541,3.59054 3.9717855,3.9717855 0 0 1 -3.95185,-3.59445
			`}
		/>
	);
};